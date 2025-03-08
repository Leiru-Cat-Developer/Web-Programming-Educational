const fs = require('fs');
const path = require('path');

const first = fs.readFileSync('./data/first.txt', 'utf-8'); //FIRST WAY
const second = fs.readFileSync('./data/second.txt');

console.log(first);
console.log(second.toString()); //SECOND WAY

//CREATING A FILE WITH FS
fs.writeFileSync('./data/third.txt', 'This is a third file created');

//WHEN WE RUN THIS CODE, IT REPLACES THE ORIGINAL
const title = 'This is a new content';
fs.writeFileSync('./data/fourth.txt', title);

//WHEN WE USE THIS METHOD WE ARE ADDING INSTEAD OF REPLACING 
const another = 'Adding text ';
fs.writeFileSync('./data/fifth.txt', another, {
    flag: 'a'
});