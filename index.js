#!/usr/bin/env node

import { program } from "commander";
import inquirer from "inquirer";

import { createComponentsTemplates } from "./utilities/createComponentsTemplates.js";
import { createFile } from "./utilities/createFile.js";
import { createFileName } from "./utilities/createFileName.js";

program
  .version("1.0.0")
  .description("CLI para crear un template de un componente de React");

program
  .command("create <name>")
  .alias("c")
  .description("Crear un componente de React")
  .action((name) => {
    const questions = [
      {
        type: "input",
        name: "componentName",
        message: "¿Cuál es el nombre del componente?",
        default: name,
      },
      {
        type: "list",
        name: "componentType",
        message: "¿Qué tipo de componente deseas crear?",
        choices: ["Todos", "jsx", "css", "test", "story"],
      },
    ];

    inquirer.prompt(questions).then((answers) => {
      const { componentName, componentType } = answers;

      const componentTemplate = createComponentsTemplates(componentType);
      for (const { type, template } of componentTemplate) {
        const fileName = createFileName(componentName, type);
        createFile(fileName, componentName, template(componentName));
      }
    });
  });

program.parse(process.argv);