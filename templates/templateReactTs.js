export function templateReactTs(componentName) {
  return `import styles from './${componentName}.module.css';
    
type ${componentName}Props = {

};

export const ${componentName} = ({}:${componentName}Props) => {
    return <div className={styles.container}>${componentName}</div>;
};
`;
}
