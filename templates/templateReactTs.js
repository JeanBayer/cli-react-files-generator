export function templateReactTs(componentName) {
  return `import styles from './${componentName}.module.css';
    
export const ${componentName} = ({}:Props) => {
    return <div className={styles.container}>${componentName}</div>;
};
`;
}
