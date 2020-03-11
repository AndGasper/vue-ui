const { spawn } = require('child_process');
const { resolve } = require('path');
const { cwd } = require('process');


// Synchronous. Gross.
const currentWorkingDirectory = cwd();
const pathToMakeComponent = resolve(currentWorkingDirectory, 'packages', 'helpers', 'make-component.js');



const components = [
    'SingleComponent',
    'AnotherComponent'
];
components.forEach(function(component) {
    const makeComponent = spawn('node', [ pathToMakeComponent, component ]);
    console.log('makeComponentCall', makeComponentCall); 
});