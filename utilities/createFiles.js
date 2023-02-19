import { createFileName, createFile } from './index.js';

export function createFiles(componentName, componentTemplates) {
  for (const { type, template } of componentTemplates) {
    const fileName = createFileName(componentName, type);
    createFile(fileName, template(componentName));
  }
}
