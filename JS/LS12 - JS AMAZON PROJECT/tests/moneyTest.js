import formatCurrency from "../js/utils/money.js";

/* 
    BASIC TEST
    Just test if the code is working properly with simple data

    EDGE TEST
    Test with values that are tricky

    FRAMEWORK
    This is another way we can test our code, a FRAMEWORK is an external
    librery that help us write test easier
*/
console.log('TEST SUIT - formatCurrency:'); //TITLE

console.log('1.- Converts cents to dollars:');
(formatCurrency(2095) === '20.95') ? console.log('PASSED') : 
    console.log(`INCORRECT! :: ${formatCurrency(2095)}`);       //BASIC

console.log('2.- Works with 0:');
(formatCurrency(0) === '0.00') ? console.log('PASSED') : 
    console.log(`INCORRECT! :: ${formatCurrency(0)}`);          //EDGE

console.log('3.- Rounds up:');
(formatCurrency(2000.5) === '20.01') ? console.log('PASSED') : 
    console.log(`INCORRECT! :: ${formatCurrency(2000.5)}`);     //EDGE

console.log('4.- Rounds down:');
(formatCurrency(2000.4) === '20.00') ? console.log('PASSED') : 
    console.log(`INCORRECT! :: ${formatCurrency(2000.4)}`);     //EDGE