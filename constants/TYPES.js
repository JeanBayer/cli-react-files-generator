export const TYPES = {
  ALL: "all",
  JSX: "jsx",
  CSS: "css",
  TEST: "test",
  STORY: "story",
  TSX: "tsx",
  TEST_TSX: "test-tsx",
  STORY_TSX: "story-tsx",
};
Object.freeze(TYPES);

export const translateType = (type) => {
  switch (type) {
    case TYPES.JSX:
      return TYPES.TSX;
    case TYPES.TEST:
      return TYPES.TEST_TSX;
    case TYPES.STORY:
      return TYPES.STORY_TSX;
    case TYPES.ALL:
      return TYPES.ALL;
    default:
      return type;
  }
};
