import chalk from "chalk";
import path from "path";
import fs from "fs";

export function createFile(fileName, componentTemplate) {
  const dirname = path.dirname(fileName);

  // Creamos la carpeta si no existe
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }

  fs.writeFile(fileName, componentTemplate, (err) => {
    if (err) {
      console.log(chalk.red(`No se pudo crear el archivo ${fileName}.`));
      return;
    }

    console.log(chalk.green(`Se ha creado el componente ${fileName}.`));
  });
}
