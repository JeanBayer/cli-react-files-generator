export function templateStorybookTs(componentName) {
  return `import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ${componentName} } from "./${componentName}";

export default {
  title: "${componentName}",
  component: ${componentName},
  argTypes: {},
} as Meta;

const Template: Story<${componentName}Props> = (args) => <${componentName} {...args} />;

export const Default = Template.bind({});
Default.args = {};  
`;
}
