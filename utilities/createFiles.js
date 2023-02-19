import {
  createFileExtension,
  createFile,
  extractComponentPathName,
  addComponentPathName,
} from "./index.js";

export function createFiles(componentPath, componentTemplates) {
  for (const { type, template } of componentTemplates) {
    const { path, name } = extractComponentPathName(componentPath);
    const fileExtension = createFileExtension(name, type);
    const filePath = addComponentPathName(path, fileExtension);
    createFile(filePath, template(name));
  }
}
