import { TYPES } from "../constants/index.js";

export function createFileExtension(name, type) {
  switch (type) {
    case TYPES.TSX:
      return `${name}.tsx`;
    case TYPES.JSX:
      return `${name}.jsx`;
    case TYPES.CSS:
      return `${name}.module.css`;
    case TYPES.TEST_TSX:
      return `${name}.test.tsx`;
    case TYPES.TEST:
      return `${name}.test.jsx`;
    case TYPES.STORY_TSX:
      return `${name}.stories.tsx`;
    case TYPES.STORY:
      return `${name}.stories.jsx`;
    case TYPES.BARREL:
      return `index.js`;
    case TYPES.BARREL_TS:
      return `index.ts`;
    default:
      return ``;
  }
}
