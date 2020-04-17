import { Tree } from '@angular-devkit/schematics';
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
export function addEnvironmentVar(host: Tree, env: string, appPath: string, key: string, value: string): void {
  const environmentFilePath = `${appPath}/environments/environment${(env) ? '.' + env : ''}.ts`;
  const sourceFile = getFileContent(host, environmentFilePath);
  const keyValue = `
  ${key}: '${value}',`;
  host.overwrite(environmentFilePath, sourceFile.replace('export const environment = {', `export const environment = {${keyValue}` ));
}
