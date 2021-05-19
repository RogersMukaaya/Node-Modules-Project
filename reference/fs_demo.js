// These modules are inbuilt

const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
//     if(err) throw err;
//     console.log('Folder created...');
// });

// Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', function(err) {
//     if(err) throw err;
//     console.log('File written to...');

//     // File append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'This is a node js course', function(err) {
//         if(err) throw err;utf8
//         console.log('File written to...');
//     });
// });

// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function(err, data) {
    if(err) throw err;
    console.log("File Renamed....");
});

