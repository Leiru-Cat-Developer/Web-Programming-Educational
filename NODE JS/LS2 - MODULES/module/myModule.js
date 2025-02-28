let thisVariableIsNotOnScreen = `Because I'm not being calling on Export Function`;

//SEVERAL TYPES OF VALUES
const myWebAddress = 'myWeb.com';
const myNumber = 30;
const myArray = [10,20,30];
const user = {
    name: 'Misato',
    lastName: 'Katsuragi'
};

//WE CAN SAVE THE VALUES IN AN OBJECT OR ...
// const group = {
//     myWebAddress: myWebAddress,
//     myNumber: myNumber,
//     myArray: myArray,
//     user: user
// };

// console.log(module);    //BEFORE WE ADD VALUES TO EXPORT
// module.exports = group;

//... WE CAN DO IT DIRECTLY WITH THE CORRECT RULES WITHOUT REPEAT VALUES
module.exports = {
    myWebAddress,
    myNumber,
    myArray,
    user
};

//WE ALSO CAN DO IT BY THIS WAY
// module.exports.myWebAddress = user;
// module.exports.myNumber = myNumber;
// module.exports.myArray = myArray;
// module.exports.user = user;

// console.log(module);    //AFTER WE ADD VALUES TO EXPORT