const fs = require('fs');
const path = require('path');
const process = require('process');

// input: node filename.js arg1 arg2 arg3
// output: process.argv => [ 'node', 'path', 'arg1', 'arg2', 'arg3' ]

/**
 * @name makeDirectory
 * @param {string} directoryName - the name of the directory
 * @description - Create a directory
 */
function makeDirectory(path) {
    return fs.mkdir(path, { recursive: false }, function(error) {
        if (error) {
            const { code } = error;
            if (code === 'EEXIST') {
                console.log('already exists');
                return;
            }
            // throw error if couldn't if/else it away...
            throw error;
        }
    });
}

function createFile(path) {
    return fs.writeFile(path, '', {
        'encoding': 'utf8',
        'mode': '0o666',
        'flag': 'w'
    }, function(error) {
        console.error('uh oh!');
        console.error(error);
        // already exists
        if (error.code === 'EEXIST') {
            return;
        }
        throw error; 
    });
}
/**
 * @name deleteDirectory
 * @param {string} path - Directory path
 * @description - Delete a directory's contents and the directory
 */
function deleteDirectory(path) {
    
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
        const whatAmI = makeDirectory(directoryName);
        const files = [ `${directoryName}/${componentName}.d.ts`, `${directoryName}/index.d.ts` ];
        files.map((file) => createFile(file));
        // directory does not exist 
        
    } catch (error) {
        console.error('Uh oh!')
        console.error(error);
        // if the error 
    }
}

// Make the directory name the same as the
// component name


makeComponent();


