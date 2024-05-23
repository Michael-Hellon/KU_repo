// fs is a Node standard library package for reading and writing files
// require is like the <script> tag in html
const fs = require('fs');

// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
fs.readFile('data.csv', 'utf8', (error, data) =>
  error ? console.error(error) : console.log(data)
);

// Uncomment this next function to write to the file with anything you pass in as process.argv[2]
// write a new file
fs.writeFile('log.txt', process.argv[2], (err) =>
  err ? console.error(err) : console.log('Success!')
);

// // to append files - this will not overwrite the values in log.txt but places it at the end of the file
// fs.appendFileFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );

