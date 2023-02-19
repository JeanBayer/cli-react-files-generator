import chalk from "chalk";
import fs from "fs";

export function createFile(fileName, componentName, componentTemplate) {
  fs.writeFile(fileName, componentTemplate, (err) => {
    if (err) {
      console.log(chalk.red(`No se pudo crear el archivo ${fileName}.`));
      return;
    }

    console.log(chalk.green(`Se ha creado el componente ${fileName}.`));
  });
}
