export const extractComponentPathName = (componentPath) => {
  const path = componentPath.split("/").slice(0, -1).join("/");
  const name = componentPath.split("/").pop();
  return { path, name };
};
