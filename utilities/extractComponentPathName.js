export const extractComponentPathName = (componentPath) => {
  const draftPath = componentPath.split("/").slice(0, -1).join("/");
  const name = componentPath.split("/").pop();
  const path = draftPath || ".";

  return { path, name };
};
