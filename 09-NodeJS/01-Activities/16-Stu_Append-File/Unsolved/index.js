// TODO: What are we importing?
// it imports the built in fs module, File System module. it allows you to work with the file system inside node
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile() - (path, data[, options], callback)
// the path - "log.txt" is the path to the file to be created
// data - '${   }` the data to write
// callback - the function to call if an error occurs
// filename (path), data to be written (first command line argument), result lambda, log if successful or not
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
// condition ? if True : if false
  err ? console.error(err) : console.log('Commit logged!')
);
