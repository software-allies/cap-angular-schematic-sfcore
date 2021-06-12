import { SchematicsException, Tree, UpdateRecorder } from '@angular-devkit/schematics';
import { getFileContent } from '@schematics/angular/utility/test';

/**
 * Appends a key: value on a specific environment file 
 * @param host Tree
 * @param env The environment to be added (example: prod, staging...)
 * @param appPath application path (/src...)
 * @param key The key to be added
 * @param value The value to be added
 * @return void
*/

/** Appends fragment to the specified file. */
export function appendToStartFile(host: Tree, filePath: string, fragment: string) {
  const fileBuffer = host.read(filePath);
  if (!fileBuffer) {
      throw new SchematicsException(`Could not read file for path: ${filePath}.`);
  }
  const content = fileBuffer.toString();
  if (content.includes(fragment)) {
      return;
  }
  const insertion = `${' '.repeat(0)}${fragment}`;
  let recordedChange: UpdateRecorder;
  recordedChange = host
      .beginUpdate(filePath)
      .insertRight(0, `${insertion}\n`);
  host.commitUpdate(recordedChange);
}

export function addEnvironmentVar(host: Tree, env: string, appPath: string, key: string, value: string): void {
  const environmentFilePath = `${appPath}/environments/environment${(env) ? '.' + env : ''}.ts`;
  const sourceFile = getFileContent(host, environmentFilePath);
  const keyValue = `
  ${key}: '${value}',`;
  host.overwrite(environmentFilePath, sourceFile.replace('export const environment = {', `export const environment = {${keyValue}` ));
}
