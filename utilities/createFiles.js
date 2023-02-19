import {
  createFileName,
  createFile,
  extractComponentPathName,
} from "./index.js";

export function createFiles(componentPath, componentTemplates) {
  for (const { type, template } of componentTemplates) {
    const { path, name } = extractComponentPathName(componentPath);
    const filePath = createFileName(path, name, type);
    createFile(filePath, template(name));
  }
}