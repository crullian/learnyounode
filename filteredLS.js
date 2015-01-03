/*var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err,data) {
        if (err) throw err;
        console.log(data.split('\n').length - 1);
});*/


var fs = require("fs");
var path = require("path");

fs.readdir(process.argv[2], function(err, files) {
  if (err) {
    throw err;
  }
  for (var i = 0; i < files.length; i++) {
    if ("." + process.argv[3] === path.extname(files[i])) {
      console.log(files[i]);
    }
  };
});

// var fs = require('fs');
// var path = require('path');

// fs.readdir(process.argv[2], function(err, files) {
//   files.forEach(function(filename) {
//     if (path.extname(filename) === '.' + process.argv[3]) {
//       console.log(filename);
//     }
//   });
// });