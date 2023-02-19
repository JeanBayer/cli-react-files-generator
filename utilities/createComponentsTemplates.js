import { templateReact } from "../templates/templateReact.js";
import { templateCssModule } from "../templates/templateCssModule.js";
import { templateTest } from "../templates/templateTest.js";
import { templateStorybook } from "../templates/templateStorybook.js";
import { TYPES } from "../constants/TYPES.js";

export function createComponentsTemplates(type) {
  const TEMPLATES = {
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
  const componentTemplate = [];

  switch (type) {
    case TYPES.JSX:
      componentTemplate.push(TEMPLATES.jsx);
      break;
    case TYPES.CSS:
      componentTemplate.push(TEMPLATES.css);
      break;
    case TYPES.TEST:
      componentTemplate.push(TEMPLATES.test);
      break;
    case TYPES.STORY:
      componentTemplate.push(TEMPLATES.story);
      break;
    case TYPES.ALL:
      for (const template in TEMPLATES) {
        componentTemplate.push(TEMPLATES[template]);
      }
      break;
  }
  return componentTemplate;
}
