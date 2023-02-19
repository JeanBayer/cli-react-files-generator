export function createFileName(fileName, type) {
  switch (type) {
    case "js":
      return `${fileName}.jsx`;
    case "css":
      return `${fileName}.module.css`;
    case "test":
      return `${fileName}.test.jsx`;
    case "story":
      return `${fileName}.stories.jsx`;
    default:
      return `${fileName}.jsx`;
  }
}
