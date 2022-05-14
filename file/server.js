const os = require('os'); // Getting Os 

console.log(os.type()); // Display Os type
console.log(os.version()); // Display os version
console.log(os.homedir()); // Display os home folder ie user folder

console.log("\n");

console.log(__dirname); // Display path of folder ie D:\Desktop files\Node JS
console.log(__filename); // Display path of folder with filename also ie D:\Desktop files\Node JS\server.js

console.log("\n");

const path = require('path'); // Getting path

console.log(path.dirname(__filename)); // Display path of folder ie D:\Desktop files\Node JS
console.log(path.basename(__filename)); // Display only file name
console.log(path.extname(__filename)); // Display only extension

console.log("\n");

console.log(path.parse(__filename)); 
// Display above object
// {
//     root: 'D:\\',
//     dir: 'D:\\Desktop Files\\Node JS',
//     base: 'server.js',
//     ext: '.js',
//     name: 'server'
//   }

console.log("\n");

const {add,sub,mul,div} = require('./math'); // importing math file 

console.log(add(8,4)); // Display 12
console.log(sub(8,4)); // Display 12
console.log(mul(8,4)); // Display 12
console.log(div(8,4)); // Display 12

console.log("\n");

