const fs = require('fs');

module.exports = {
    /**
     * @name writeFileContents
     * @param {string} fileName - Path to file to save
     * @param {string} fileContents  - String version of the file
     * @description - Save the _string_ contents to a file. Do *not* call multiple times since this should be a writeFileStream if the use-case is multiple writes.
     */
    writeFileContents: function(fileName, fileContents) {
        fs.writeFile(fileName, fileContents, {
            'encoding': 'utf8',
            'mode': 0o666,
            'flag': 'w'
        }, function(error) {
            if (error) {
                console.error('writeFileContents error from writeFile');
                const { code } = error;
                if (code === 'ENOENT') {
                    console.error(error);
                    console.error('I am speed => file does not exist.');
                    return;
                }
                throw error;
            }
            return;
        })
    },

    /**
     * @name makeDirectory
     * @param {string} directoryName - the name of the directory
     * @description - Create a directory
     */
    makeDirectory: function(path) {
        return fs.mkdir(path, { 
            recursive: false 
        }, function(error) {
            if (error) {
                const { code } = error;
                if (code === 'EEXIST') {
                    console.error(`makeDirectory - ${code}`);
                    return;
                }
                // throw error if couldn't if/else it away...
                throw error;
            }
        });
    },

    createFile: function(path) {
        return fs.writeFile(path, '', {
            'encoding': 'utf8',
            'mode': 0o666,
            'flag': 'w'
        }, function(error) {
            if (error) {
                const { code } = error; 
                if (code === 'EEXIST') {
                    console.error(`createFile: ${code}`);
                    return;
                }
                console.error('createFile - couldn\'t quite catch it!');
                console.error(error);
                throw error; 
            } else { 
                return;
            }
        });
    },

    /**
     * @name deleteDirectory
     * @param {string} path - Directory path
     * @description - Delete a directory's contents and the directory
     */
    deleteDirectory: function(path) {
        // recursive -> yolo.
        fs.rmdir(path, {
            'maxRetries': 3,
            'recursive': true,
            'retryDelay': 100 // default but still.
        }, function(error) {
            if (error) {
                console.error('Uh oh! - deleteDirectory');
                console.error(error);
                throw error; 
            }
        })
    }
}