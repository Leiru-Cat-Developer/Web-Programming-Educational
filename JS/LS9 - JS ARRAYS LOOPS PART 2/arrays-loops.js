const array1 = [1,2,3];         //REFERENCE
const array2 = array1.slice();  //POINTING TO THE SAME ARRAY
array2.push(4);                 //IF WE DON'T ADD THIS, THE ARRAY 2 AND 1 WILL BE AFFECTED AND BOTH CHANGE THE VALUES
                                //TO AVOID THIS BEHAVIOR, WE NEED TO USE SLICE() PROPERTIE WHEN WE PASS THE VALUES TO THE NEW ARRAY
console.log(array1);
console.log(array2);

const [firstValue,secondValue] = [1,2,3];   //WE CAN SAVE EACH VALUE OF THE ARRAY IN A VARIABLE

for (let i = 1; i <= 10; i++) {
    if(i % 3 === 0) {
        continue;   //CAN SKIP A VALUE
    }
    console.log(i);
    if (i === 8) {
        break;  //EXIT A LOOP EARLY
    }
}

let i = 1;
while (i <= 10) {
    if (i % 3 === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}

//DOUBLE VALUES WITH A FUNCTION
function doubleArray(nums) {
    const numsDoubled = [];
    for (let i = 0; i< nums.length; i++) {
        const num = nums[i];
        if (num === 0) {
            return numsDoubled; //THIS ENDS THE LOOP IMMEDIATELY WHEN FIND A ZERO
        }
        numsDoubled.push(num * 2);
    }
    return numsDoubled;
}

console.log(doubleArray([1,1,3]));
console.log(doubleArray([2,2,5,0,5]));