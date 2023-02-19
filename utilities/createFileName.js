import { TYPES } from "../constants/TYPES.js";

export function createFileName(fileName, type) {
  switch (type) {
    case TYPES.TSX:
      return `${fileName}.tsx`;
    case TYPES.JSX:
      return `${fileName}.jsx`;
    case TYPES.CSS:
      return `${fileName}.module.css`;
    case TYPES.TEST_TSX:
      return `${fileName}.test.tsx`;
    case TYPES.TEST:
      return `${fileName}.test.jsx`;
    case TYPES.STORY_TSX:
      return `${fileName}.stories.tsx`;
    case TYPES.STORY:
      return `${fileName}.stories.jsx`;
    default:
      return `${fileName}.jsx`;
  }
}
