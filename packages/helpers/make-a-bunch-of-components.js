/**
 * @name - make-a-bunch-of-components
 * @description - Use the make-component script + list of components to make all the components in one go...what could go wrong?
 */
const { spawn } = require('child_process');
const { resolve } = require('path');
const { cwd } = require('process');

const  { componentList } = require('./component-list');

const currentWorkingDirectory = cwd();
const pathToMakeComponent = resolve(currentWorkingDirectory, 'packages', 'helpers', 'make-component.js');


// Synchronous. Gross.
componentList.forEach(componentName => {
    const makeComponent = spawn('node', [pathToMakeComponent, componentName]);
    makeComponent.stdout.on('data', function(data) {
        console.log('makeComponent - data',`stdout: ${data}`);
    });
    makeComponent.stderr.on('data', function(data) {
        console.error(`makeComponent - stderr: ${data}`)
    });
    makeComponent.on('close', function(code) {
        console.log(`makeComponent - child process exited with code: ${code}`);
    })
});