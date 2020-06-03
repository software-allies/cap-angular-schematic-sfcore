import {
  apply,
  FileEntry,
  forEach,
  MergeStrategy,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  template,
  Tree,
  url,
  noop,
  chain,
  SchematicsException,
  externalSchematic
} from '@angular-devkit/schematics';
import {
  join,
  normalize 
} from 'path';
import { getWorkspace } from '@schematics/angular/utility/config';
import {
  NodeDependency,
  NodeDependencyType,
  addPackageJsonDependency,
  WorkspaceProject,
  getProjectFromWorkspace,
  getAppModulePath,
  addImportToModule,
  // InsertChange
} from 'schematics-utilities';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { getProjectMainFile, getSourceFile } from 'schematics-utilities/dist/cdk';
import { addEnvironmentVar } from './cap-utils';
import { buildDefaultPath } from '@schematics/angular/utility/project';



export default function (options: any): Rule {
  return chain([
    options && options.skipModuleImport ? noop() : capAngularSchematicSfcore(options),
    options && options.skipPackageJson ? noop() : addPackageJsonDependencies(),
    options && options.skipPackageJson ? noop() : installPackageJsonDependencies(),
    options && options.skipModuleImport ? noop() : addModuleToImports(options),
    addToEnvironments(options),
    addBootstrapSchematic(),
  ]);
}

function addBootstrapSchematic() {
  return externalSchematic('cap-angular-schematic-bootstrap', 'ng-add', { version: "4.0.0", skipWebpackPlugin: true });
}

function addToEnvironments(options: any): Rule {
  let srcPath = '/src';
  if (options.project) {
    srcPath = buildDefaultPath(options.project);
  }
  return (host: Tree) => {
    // development environment
    addEnvironmentVar(host, '', srcPath, 'sfApiUrl', options.credentials ? options.apiEndPoint : '');
    if (options.credentials) {
      addEnvironmentVar(host, 'prod', srcPath, 'sfApiUrl', options.credentials ? options.apiEndPoint : '');
    }
  }
}

export function setupOptions(host: Tree, options: any): Tree {
  const workspace = getWorkspace(host);
  if (!options.project) {
    options.project = Object.keys(workspace.projects)[0];
  }
  const project = workspace.projects[options.project];
  options.path = join(normalize(project.root), 'src/app/modules/sales-force-core');
  return host;
}

export function capAngularSchematicSfcore(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    setupOptions(tree, _options);

    const movePath = normalize(_options.path + '/');
    const templateSource = apply(url('./files'), [
      template({
        ..._options
        }),
      move(movePath),
      forEach((fileEntry: FileEntry) => {
        if (tree.exists(fileEntry.path)) {
          tree.overwrite(fileEntry.path, fileEntry.content);
        }
        return fileEntry;
      }),
    ]);
    const rule = mergeWith(templateSource, MergeStrategy.Overwrite);

    return rule(tree, _context);;
  };
}

export function addPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    const dependencies: NodeDependency[] = [
      { type: NodeDependencyType.Default, version: '^1.0.13', name: 'cap-sfcore'},
      { type: NodeDependencyType.Default, version: '^3.0.1', name: '@auth0/angular-jwt'},
      { type: NodeDependencyType.Default, version: '^9.5.3', name: 'sweetalert2' },
      { type: NodeDependencyType.Default, version: '^5.0.0', name: 'ngx-pagination' },
      { type: NodeDependencyType.Default, version: '^3.3.3', name: 'uuid' }
    ];
    dependencies.forEach(dependency => {
      addPackageJsonDependency(host, dependency);
      context.logger.log('info', `✅️ Added "${dependency.name}" into ${dependency.type}`);
    });
    return host;
  };
}

export function installPackageJsonDependencies(): Rule {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
    context.logger.log('info', `🔍 Installing packages...`);
    return host;
  };
}

function addModuleToImports (options: any): Rule {
  return (host: Tree) => {
    const workspace = getWorkspace(host);
    let project : WorkspaceProject = getProjectFromWorkspace(workspace, options.project);
    const moduleName = 'SalesForceModule';
    const modulePath = getAppModulePath(host, getProjectMainFile(project));
    auxAddModuleRoorToImports(host, modulePath, moduleName, './modules/sales-force-core/salesforce.module');
    return host;
  };
}

export function auxAddModuleRoorToImports (host: Tree, modulePath: string, moduleName: string, src: string) {
  const moduleSource = getSourceFile(host, modulePath);
  if (!moduleSource) {
    throw new SchematicsException(`Module not found: ${modulePath}`);
  }

  const changes = addImportToModule(moduleSource as any, modulePath, moduleName, src);
  let recorder = host.beginUpdate(modulePath);
  changes.forEach((change:any) => {
    // if (change instanceof InsertChange) {
      if (change.toAdd) {
        recorder.insertLeft(change.pos, change.toAdd);
      }
    // }
  });
  host.commitUpdate(recorder);
  return host
}
