// process.argv[2] is the test file, third argument passed
// .split everytime there's a new line
// length -1 because the last line doesn't have a new line char

var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]).toString().split('\n').length -1; 

console.log(buffer);
