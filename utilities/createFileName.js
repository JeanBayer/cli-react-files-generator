import { TYPES } from "../constants/index.js";

export function createFileName(path, name, type) {
  switch (type) {
    case TYPES.TSX:
      return `${path}/${name}.tsx`;
    case TYPES.JSX:
      return `${path}/${name}.jsx`;
    case TYPES.CSS:
      return `${path}/${name}.module.css`;
    case TYPES.TEST_TSX:
      return `${path}/${name}.test.tsx`;
    case TYPES.TEST:
      return `${path}/${name}.test.jsx`;
    case TYPES.STORY_TSX:
      return `${path}/${name}.stories.tsx`;
    case TYPES.STORY:
      return `${path}/${name}.stories.jsx`;
    case TYPES.BARREL:
      return `${path}/index.js`;
    case TYPES.BARREL_TSX:
      return `${path}/index.ts`;
    default:
      return `${componentPath}`;
  }
}
