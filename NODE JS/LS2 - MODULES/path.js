const path = require('path');

console.log(path);
console.log(path.sep);
const filePath = path.join('/public','dist','\\styles','main.css');
// console.log(path.join('/public','dist','\\styles','main.css'));   //CONVERTER TO MAKE A VALID PATH
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.parse(filePath));
console.log(path.resolve(filePath));