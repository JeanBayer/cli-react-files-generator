#!/usr/bin/env node
import { program } from "commander";
import inquirer from "inquirer";
import chalk from "chalk";

import { createComponentsTemplates, createFiles } from "./utilities/index.js";
import { TYPES, translateType } from "./constants/index.js";

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
        name: "componentPath",
        message: `¿Cuál es el nombre del componente? ${chalk.gray("(ej: Button o src/components/Button/Button)")}`,
        default: name,
        suffix: ":",
      },
      {
        type: "list",
        name: "componentType",
        message: "¿Qué tipo de componente deseas crear?",
        choices: [TYPES.ALL, TYPES.JSX, TYPES.TEST, TYPES.STORY, TYPES.CSS],
      },
      {
        type: "confirm",
        name: "hasTypescript",
        message: "¿Deseas usar Typescript?",
        default: true,
      },
    ];

    inquirer.prompt(questions).then((answers) => {
      const { componentPath, componentType, hasTypescript } = answers;

      const translatedComponentType = hasTypescript
        ? translateType(componentType)
        : componentType;

      const componentTemplates = createComponentsTemplates(
        translatedComponentType,
        hasTypescript
      );
      createFiles(componentPath, componentTemplates);
    });
  });

program.parse(process.argv);
