import { TYPES, TEMPLATES_JSX, TEMPLATES_TSX } from "../constants/index.js";

export function createComponentsTemplates(type, hasTypescript) {
  const componentTemplate = [];

  switch (type) {
    case TYPES.TSX:
      componentTemplate.push(TEMPLATES_TSX[TYPES.TSX]);
      break;
    case TYPES.JSX:
      componentTemplate.push(TEMPLATES_JSX[TYPES.JSX]);
      break;
    case TYPES.CSS:
      componentTemplate.push(TEMPLATES_TSX[TYPES.CSS]);
      break;
    case TYPES.TEST_TSX:
      componentTemplate.push(TEMPLATES_TSX[TYPES.TEST_TSX]);
      break;
    case TYPES.TEST:
      componentTemplate.push(TEMPLATES_JSX[TYPES.TEST]);
      break;
    case TYPES.STORY_TSX:
      componentTemplate.push(TEMPLATES_TSX[TYPES.STORY_TSX]);
      break;
    case TYPES.STORY:
      componentTemplate.push(TEMPLATES_JSX[TYPES.STORY]);
      break;
    case TYPES.ALL:
      if (hasTypescript) {
        for (const template in TEMPLATES_TSX) {
          componentTemplate.push(TEMPLATES_TSX[template]);
        }
      } else {
        for (const template in TEMPLATES_JSX) {
          componentTemplate.push(TEMPLATES_JSX[template]);
        }
      }
      break;
  }
  return componentTemplate;
}
