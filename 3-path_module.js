const path = require('path');
//get file path
const filepath = path.join('testFolder', 'folder2', 'module_test_2.txt');
console.log(filepath);

//get file name
console.log(path.basename(filepath));

//get file absolute name
console.log(path.resolve(__dirname, 'testFolder', 'folder2', 'module_test_2.txt'));