
const path = require('path');
const process = require('process');

const { writeFileContents, makeDirectory, createFile, deleteDirectory } = require('./file-helpers');

// input: node filename.js arg1 arg2 arg3
// output: process.argv => [ 'node', 'path', 'arg1', 'arg2', 'arg3' ]


/**
 * @name makeBoilerPlateComponentTypeDefinition
 * @param {string} componentName - the name of the component
 * @description - Create the generic typescript definition for the component
 * @return {string} boilerPlateTypeDefinition - UTF-8 boilerplate type definition
 */
function makeBoilerPlateComponentTypeDefinition(componentName) {
    const importStatements = `import * as Vue from 'vue';\nimport { StandardProps } from '..';`;
    // templating...
    const componentProps = `export interface ${componentName}Props\n\textends StandardProps<Vue.HTMLAttributes<HTMLDivElement>, ${componentName}ClassKey> {\n\t component?: Vue.ElementType<Vue.HTMLAttributes<HTMLDivElement>>;\n\t<morestuff>\n}`;
    const componentClassKey = `export type ${componentName}Classkey = [<classKey>];`;
    const componentDeclaration = `declare const ${componentName}: Vue.ComponentType<${componentName}Props>;`;
    const exportComponent = `export default ${componentName};`;

    const boilerPlateTypeDefinition = `${importStatements}\n\n${componentProps}\n\n${componentClassKey}\n\n${componentDeclaration}\n\n${exportComponent}`;

    return boilerPlateTypeDefinition;

}

/**
 * @name makeBoilerPlateComponentIndex
 * @param {string} componentName 
 * @description - Create the index.d.ts boilerplate statements.
 * @return {string} indexStatements - String version of index.d.ts
 */
function makeBoilerPlateComponentIndex(componentName) {
    const exportDefaultStatement = `export { default } from './${componentName}';`;
    const exportWildCardStatement = `export * from './${componentName}';`;
    const indexStatements = `${exportDefaultStatement}\n${exportWildCardStatement}`;
    return indexStatements;
}


/**
 * @name makeComponent
 * @description - Create the directory, create the <COMPONENT>.d.ts, create the index.d.ts
 */
function makeComponent() {
    try {
        const componentName = process.argv[2];
        const currentWorkingDirectory = process.cwd();
        const directoryName = path.resolve(currentWorkingDirectory, 'packages', 'vue-ui', 'src', componentName);
        makeDirectory(directoryName);
        const componentTypeDefinitionFile = `${directoryName}/${componentName}.d.ts`;
        const componentIndexFile = `${directoryName}/index.d.ts`;
        const files = [ componentTypeDefinitionFile,  componentIndexFile ];
        // touch the file. Probably wasteful to write empty and then write again. C'est la vie. 
        files.map((file) => createFile(file));
        const componentTypeDefinitionSkeleton = makeBoilerPlateComponentTypeDefinition(componentName);
        const componentIndexSkeleton = makeBoilerPlateComponentIndex(componentName);
        try {
            // output the (spooky) skeletons
            writeFileContents(componentTypeDefinitionFile, componentTypeDefinitionSkeleton);
            writeFileContents(componentIndexFile, componentIndexSkeleton);
        } catch(error) {
            console.error('writeFileContents error - oof.');
            console.error(error);
        }
        

        // directory does not exist 
        
    } catch (error) {
        console.error('Uh oh!')
        console.error(error);
        // if something went wrong-wrong delete the directory (bail)
        try {
            deleteDirectory(directoryName);
        } catch(error) {
            console.error('now you really dun goofed - error + deleteDirectory failed');
        }
        // if the error 
    }
}

// Make the directory name the same as the
// component name


makeComponent();