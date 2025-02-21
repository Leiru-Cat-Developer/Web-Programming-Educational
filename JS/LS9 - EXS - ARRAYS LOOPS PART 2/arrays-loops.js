//11O - 11P
const string1 = ['hello','world','search','good','search'];
const string2 = ['not','found'];

function checkString (array) {
    let index = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'search') {
            index = i;
            break;
        }
    }
    return index;
}

console.log(checkString(string1));
console.log(checkString(string2));

//11Q
function findIndex (array,word) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === word) {
            return i;
        }
    }
    return -1;
}

console.log(findIndex(['green','red','blue','red'],'red'));
console.log(findIndex(['green','red','blue','red'],'yellow'));

//11R - 11U
function removeEgg(foods) {
    const foodsCopy = foods.slice();
    const reverseFoods = foodsCopy.reverse();
    const result = [];
    let eggsRemoved = 0;
    for (let i = 0; i < reverseFoods.length; i++) {
        if (reverseFoods[i] === 'egg' && eggsRemoved < 2) {
            eggsRemoved++;
            continue;
        }
        result.push(reverseFoods[i]);
    }
    return result.reverse();
}

const foodArray = ['egg','apple','egg','egg','ham'];

console.log(foodArray);
console.log(removeEgg(foodArray));

//11V
for (let i = 1; i <= 20; i++) {
    if ((i % 3 === 0)&&(i % 5 === 0)){
        console.log('FizzBuzz');
        continue;
    } else if (i % 3 === 0) {
        console.log('Fizz');
        continue;
    }else if (i % 5 === 0) {
        console.log('Buzz');
        continue;
    } else {
        console.log(i);
    }
}

//11W
function unique(array) {
    const result = [];
    for (let i = 0; i < array.length; i ++) {
        const word = array[i];  //WE ARE GOING TO SAVE THE WORD OF EACH RAW
        if (findIndex(result, word) === -1) {
            result.push(word);
        }
    }
    return result;
}

//THIS FUNCTION MAKES AN ARRAY APPEARS JUST ONCE
console.log(unique(['green','red,','blue','red']));