import { TYPES } from "../constants/TYPES.js";

export function createFileName(fileName, type) {
  switch (type) {
    case TYPES.JSX:
      return `${fileName}.jsx`;
    case TYPES.CSS:
      return `${fileName}.module.css`;
    case TYPES.TEST:
      return `${fileName}.test.jsx`;
    case TYPES.STORY:
      return `${fileName}.stories.jsx`;
    default:
      return `${fileName}.jsx`;
  }
}
