import chalk from "chalk";
import path from "path";
import fs from "fs";

export function createFile(filePath, componentTemplate) {
  const dirname = path.dirname(filePath);

  // Creamos la carpeta si no existe
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }

  fs.writeFile(filePath, componentTemplate, (err) => {
    if (err) {
      console.log(chalk.red(`No se pudo crear el archivo ${filePath}.`));
      return;
    }

    console.log(chalk.green(`Se ha creado el componente ${filePath}`));
  });
}
