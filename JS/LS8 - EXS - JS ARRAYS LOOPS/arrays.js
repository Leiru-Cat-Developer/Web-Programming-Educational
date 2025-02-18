//EXS 11A
const nums = [10,20,30];
nums[2] = 99;   //WE CHANGE THE VALUE IN AN SPECIFIC POSITION
console.log(`CASSIC ARRAY: ${nums}`);

//EXS 11B
function getLastValue(array) {
    const lastIndex = array.length - 1;
    return array[lastIndex];
}
console.log(`LAST VALUE: ${getLastValue(nums)}`);

//EXS 11C
function arraySwap(array) {
    const newArray = array; //WE PASS THE ARRAY TO KEEP THE ORIGINAL VALUES
    const temp = [];        //TEMP ARRAY TO CHANGE VALUES
    const lastIndexPosition = newArray.length - 1; //WE GET THE LAST POSITION
    temp[0] = newArray[0];
    newArray[0] = newArray[lastIndexPosition];
    newArray[lastIndexPosition] = temp[0];
    return newArray;
}
//THREE EXAMPLES OF ARRAYS TO SWAP
const letters = ['a','b','c','d','e'];
const numbers = [1,2,3,4,5,6,7,8,9,10];
const random = [1,'a',54,'Hola','Adios'];

console.log(`SWAP ARRAY: ${arraySwap(letters)}`);
console.log(`SWAP ARRAY: ${arraySwap(numbers)}`);
console.log(`SWAP ARRAY: ${arraySwap(random)}`);

//11D
console.log('INCREASE BY 2 STEP');
for (i = 0; i <= 10; i+=2) {
    console.log(i);
}

//11E
console.log('DECREASE BY 1 STEP');
for (i = 5; i >= 0; i--) {
    console.log(i);
}

//11F
console.log('INCREASE BY 2 STEP, WHILE METHOD');
let x = 0;
while (x <= 10) {
    console.log(x);
    x += 2;
}

console.log('DECREASE BY 1 STEP, WHILE METHOD');
let y = 5;
while (y >= 0) {
    console.log(y);
    y--;
}


//11G
const arrayNumbers = [1,2,3,4,5,6,7,8,9,10];
const newArrayNumbers = [];
for (i = 0; i < arrayNumbers.length; i++) {
    let number = arrayNumbers[i];       //SAVE THE VALUE IN OTHER VARIABLE
    newArrayNumbers[i] = (number += 1); //JUST INCREASE THE VALUE TO THE VARIABLE TO KEEP THE VALUES IN THE ORIGINAL ARRAY
}
console.log(`ORGINAL ARRAY: ${arrayNumbers}`);
console.log(`NEW ARRAY INCREASED BY 1: ${newArrayNumbers}`);

//11H
function addOne(array) {
    const newArrayNumbers = [];
    for (i = 0; i < array.length; i++) {
        let number = array[i];       //SAVE THE VALUE IN OTHER VARIABLE
        newArrayNumbers[i] = (number += 1); //JUST INCREASE THE VALUE TO THE VARIABLE TO KEEP THE VALUES IN THE ORIGINAL ARRAY
    }
    return newArrayNumbers;
}
console.log(`ORIGINAL ARRAY, FUNCTION METHOD: ${arrayNumbers}`);
console.log(`NEW ARRAY INCREASED BY 1, FUNCTION METHOD: ${addOne(arrayNumbers)}`);

//11I
function addNum(array,num) {
    const newArrayNumbers = [];
    for (i = 0; i < array.length; i++) {
        let number = array[i];       //SAVE THE VALUE IN OTHER VARIABLE
        newArrayNumbers[i] = (number += num); //JUST INCREASE THE VALUE TO THE VARIABLE TO KEEP THE VALUES IN THE ORIGINAL ARRAY
    }
    return newArrayNumbers;
}
console.log(`ORIGINAL ARRAY, ADD NUM: ${arrayNumbers}`);
console.log(`NEW ARRAY INCREASED BY N, ADD NUM: ${addNum(arrayNumbers,10)}`);

//11J
function addArrays(array1,array2) {
    const newArrayNumbers = [];
    if(array1.length != array2.length) {
        console.log("IT'S NOT POSSIBLE TO COMBINE BOTH ARRAYS . . .");
        newArrayNumbers[0] = '----';
    }else {
        for (i = 0; i < array1.length; i++) {
            let numberArray1 = array1[i];
            let numberArray2 = array2[i];
            newArrayNumbers[i] = numberArray1 + numberArray2;
        }
    }
    return newArrayNumbers;
}
const num1 = [1,1,2,4];
const num2 = [1,1,3,4];

console.log('BOTH ORIGINAL ARRAYS');
console.log(num1);
console.log(num2);
console.log(`NEW ARRAY: ${addArrays(num1,num2)}`);

//11K
function countPositive(nums) {
    let counter = 0;
    for (i = 0; i < nums.length; i++) {
        if(nums[i] > 0) {
            counter++;
        }
    }
    return counter;
}
const num3 = [-3,-3,-4,0,2,3,5];
console.log(`POSITIVE NUMBERS ${countPositive(num3)}`);

//11L - M
function minMax(nums) {
    let object = {
        min: 99999,
        max: 0
    };

    if(nums.length === 0) {
        object.min = null;
        object.max = null;
    }else {
        for (i = 0; i < nums.length; i++) {
            if(nums[i] > object.max){
                object.max = nums[i];
            }
            if(nums[i] < object.min) {
                object.min = nums[i];
            }
        }
    }

    return `Min: ${object.min}, Max: ${object.max}`;
}
const num4 = [1,-3,5];
const num5 = [-2,3,-5,7,10];
const num6 = [];
const num7 = [3];
console.log(`OBJECT: ${minMax(num4)}`);
console.log(`OBJECT: ${minMax(num5)}`);
console.log(`OBJECT: ${minMax(num6)}`);
console.log(`OBJECT: ${minMax(num7)}`);

//11N
function countWords(words) {
    let object = {}

    for(i = 0; i < words.length; i++) {
        const word = words[i];
        if(!object[word]) {
            object[word] = 1;
        }else {
            object[word]++;
        }
    }
    return object;
}
console.log(countWords(['apple','pear','apple','pear']));