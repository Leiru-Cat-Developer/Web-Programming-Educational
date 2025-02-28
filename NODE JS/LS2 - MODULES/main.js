const web = require('./module/myModule');

//WE CAN DO THIS INSTEAD OF BRING ALL THE VALUES IN THE OBJECT
const {myArray} = require('./module/myModule');
const {myNumber} = require('./module/myModule');
const {myWebAddress} = require('./module/myModule');
const {user} = require('./module/myModule');

console.log(web);
console.log(myArray);
console.log(myNumber);
console.log(myWebAddress);
console.log(user);