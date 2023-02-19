import {
  templateReact,
  templateReactTs,
  templateCssModule,
  templateTest,
  templateTestTs,
  templateStorybook,
  templateStorybookTs,
} from "../templates/index.js";
import { TYPES } from "../constants/TYPES.js";

export function createComponentsTemplates(type, hasTypescript) {
  const TEMPLATES_JSX = {
    [TYPES.JSX]: {
      type: TYPES.JSX,
      template: templateReact,
    },
    [TYPES.CSS]: {
      type: TYPES.CSS,
      template: templateCssModule,
    },
    [TYPES.TEST]: {
      type: TYPES.TEST,
      template: templateTest,
    },
    [TYPES.STORY]: {
      type: TYPES.STORY,
      template: templateStorybook,
    },
  };

  const TEMPLATES_TSX = {
    [TYPES.TSX]: {
      type: TYPES.TSX,
      template: templateReactTs,
    },
    [TYPES.CSS]: {
      type: TYPES.CSS,
      template: templateCssModule,
    },
    [TYPES.TEST_TSX]: {
      type: TYPES.TEST_TSX,
      template: templateTestTs,
    },
    [TYPES.STORY_TSX]: {
      type: TYPES.STORY_TSX,
      template: templateStorybookTs,
    },
  };

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
        for (const template in TEMPLATES_TSX) {
          componentTemplate.push(TEMPLATES_TSX[template]);
        }
      }
      break;
  }
  return componentTemplate;
}
