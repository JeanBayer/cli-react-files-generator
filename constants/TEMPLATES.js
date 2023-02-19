import { TYPES } from "./index.js";
import {
  templateReact,
  templateReactTs,
  templateCssModule,
  templateTest,
  templateTestTs,
  templateStorybook,
  templateStorybookTs,
} from "../templates/index.js";

export const TEMPLATES_JSX = {
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

export const TEMPLATES_TSX = {
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
