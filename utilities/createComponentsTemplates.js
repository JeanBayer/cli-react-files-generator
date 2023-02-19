import { templateReact } from "../templates/templateReact.js";
import { templateCssModule } from "../templates/templateCssModule.js";

export function createComponentsTemplates(type) {
  const componentTemplate = [];
  switch (type) {
    case "jsx":
      componentTemplate.push({
        type: "jsx",
        template: templateReact,
      });
      break;
    case "css":
      componentTemplate.push({
        type: "css",
        template: templateCssModule,
      });
      break;
    case "Todos":
      componentTemplate.push({
        type: "jsx",
        template: templateReact,
      });
      componentTemplate.push({
        type: "css",
        template: templateCssModule,
      });
      break;
  }
  return componentTemplate;
}
