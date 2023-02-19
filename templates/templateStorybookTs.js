export function templateStorybookTs(componentName) {
  return `import React from "react";
import { ${componentName} } from "./${componentName}";

export default {
  title: "${componentName}",
  component: ${componentName},
};

const Template = (args) => <${componentName} {...args} />;

export const Default = Template.bind({});
Default.args = {};  
`;
}
