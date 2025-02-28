//EXAMPLE OF ARROW FUNCTION
const arrowFunction = (p1,p2) => {
    console.log('Arrow Function');
    return 5;
}
arrowFunction();

//EXAMPLE OF REGULAR FUNCTION
const regularFunction = function(p1,p2) {
    console.log('Regular Function');
    return 5;
}
regularFunction();

//SHORCUTS FOR ARROW FUNCTIONS
const oneParameter = parameter => {
    console.log(parameter + 1);
}
oneParameter(2);

const oneLine = () => 2 + 3;    //WE CAN EREASE BRACKETS AND RETURN WORD
console.log(oneLine());

//EXAMPLES OF ARROW FUNCTIONS
[
    'Make Dinner',
    'Wash Dishes',
    'Watch YouTube'
].forEach((value, index) => {
    if (value === 'Wash Dishes') {
        return;
    }

    console.log(index);
    console.log(value);
});

const obj1 = {
    method: () => {
        //ARROW FUNCTION INSIDE AN OBJECT - IT'S LARGER THAN ...
    },
    method() {
        //... THIS ONE WHICH IS CALLED A SHORTHAND FUNCTION
    }
}

//NEW CODE
const buttonElement = document.querySelector('.js-button');

//THIS DOES THE SAME AS ONCLICK FUNCTION, BUT ADDING MULTIPLE LISTENERS IS CONFUSING BECAUSE RUNS MULTIPLE FUNCTIONS

//THIS METHOD JUST RUNS THE SECOND FUNCTION, WE NEED TO SAVE THE ARROW FUNCTION INTO A VARIABLE TO MAKE THIS POSSIBLE
const eventListener = () => {console.log('Click1')};
buttonElement.addEventListener('click',eventListener);
buttonElement.removeEventListener('click',eventListener);

buttonElement.addEventListener('click',() => {console.log('Click2')});

//FILTER
console.log([1,-3,5].filter((value,index) => {
    /*
    if (value >= 0) {
        return true;
    }else {
        return false;
    }
    */
    return value >= 0;  //DOES THE SAME THING AS THE CODE ABOVE
}));

//MAP
console.log([1,1,3].map((value, index) => {
    return value * 2;
}));

//DOES THE SAME AS THE CODE ABOVE BUT SHORTER
console.log([1,1,3].map(value => value * 2));