//12J - 12K
const multiply = (num1,num2) => num1 * num2;

console.log(multiply(2,3));
console.log(multiply(7,10));

//12I
function countPositive(nums) {
    let greaterZero = 0;
    nums.forEach((num) => {
        if (num > 0) {greaterZero++;}
    });
    return greaterZero;
}

console.log(countPositive([1,-3,5]));
console.log(countPositive([-2,3,-5,7,10]));

//12M
function addNum(array,num) {
    return array.map(value => value + num);
}

console.log(addNum([1,2,3],2));
console.log(addNum([-2,-1,0,99],2));

//12N - 12O
function removeEgg(foods) {
    let eggFound = 0;
    return foods.filter((value,index) => {
        if (value === 'egg') { eggFound++; }
        if (eggFound <= 2) { 
            return value != 'egg';
        }else {
            return value;
        }
    });
}

console.log(removeEgg(['egg','apple','egg','egg','ham']));