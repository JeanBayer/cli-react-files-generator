#!/usr/bin/env node
import { program } from "commander";
import inquirer from "inquirer";

import { createComponentsTemplates, createFiles } from "./utilities/index.js";
import { TYPES } from "./constants/TYPES.js";

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
        choices: Object.values(TYPES),
      },
      {
        type: "list",
        name: "withTypescript",
        message: "¿Deseas usar Typescript?",
        choices: ["Si", "No"],
      },
    ];

    inquirer.prompt(questions).then((answers) => {
      const { componentName, componentType, withTypescript } = answers;
      const hasTypescript = withTypescript === "Si";

      const componentTemplates = createComponentsTemplates(
        componentType,
        hasTypescript
      );
      createFiles(componentName, componentTemplates);
    });
  });

program.parse(process.argv);
