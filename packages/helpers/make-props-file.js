/**
 * @name make-props-file.js
 * @description - Create that big file with all the imports for the Component Prop(ertie)s
 */
const { componentList } = require('./component-list')
const { cwd } = require('process');
const { resolve } = require('path');
const { writeFileContents } = require('./file-helpers');


let importStringTemplate = '';
let exportInterfaceObjectStringTemplate = ''
// iterate over all the components
componentList.forEach(componentName => {
    let importStatement = `import { ${componentName}Props } from '../${componentName}';\n`;
    importStringTemplate += importStatement;
    exportInterfaceObjectStringTemplate += `\tVueUi${componentName}: ${componentName}Props;\n`;
});

const exportComponentPropsTypeStatement = `export type ComponentsProps = {\n\t[Name in keyof ComponentPropsList]?: Partial<ComponentPropsList[Name]>\n};`
const exportInterfaceStatement = `export interface ComponentsPropsList {\n\t${exportInterfaceObjectStringTemplate}}`;
const PROPS_DEFINITION_FILE_NAME = 'props.d.ts';
const propsFilePath = resolve(cwd(), 'packages', 'vue-ui', 'src', 'styles', PROPS_DEFINITION_FILE_NAME);
const propsFileOutput = `${importStringTemplate}\n${exportComponentPropsTypeStatement}\n${exportInterfaceStatement}`;

writeFileContents(propsFilePath, propsFileOutput);





