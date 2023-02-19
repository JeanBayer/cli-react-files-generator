export function templateReact(componentName) {
  return `import styles from './${componentName}.module.css';
    
export const ${componentName} = () => {
    return <div className={styles.container}>${componentName}</div>;
};
`;
}
