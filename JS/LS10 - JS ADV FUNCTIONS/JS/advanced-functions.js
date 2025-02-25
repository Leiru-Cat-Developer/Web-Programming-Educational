greeting(); //WE NEED TO CALL THE FUNCTION TO DISPLAY IT
function greeting() {
    console.log('Hello');
}

//FUNCTIONS are VALUES

const num = 2;
//ANONYMOUS FUNCTION
const function1 = function () {
    console.log('Hello 2');
}

console.log(function1); //SHOW US THE FUNCTIONS INSIDE THE VARIABLE
console.log(typeof function1);  //COMPROBATION IS A FUNCTION
function1();    //THIS RUNS THE CODE OF THE FUNCTION

const obj1 = {
    //OBJECT
    num: 2,
    fun: function () {
        console.log('Hello 3');
    }
};

obj1.fun(); //WE USE BRAKETS BECAUSE IS A FUNCTION WE ARE CALLING

//THIS IS PASSING A VARIABLE
function display(param) {
    console.log(param);
}

display(2);

//WE CAN ALSO PASS A FUNCTION INTO A FUNCTION JUST AS BEFORE
function run(param) {
   param(); 
}

run(function() {console.log('Hello 4')});

/*
//WHAT WE WANT TO DISPLAY, TIME IN MS
//WON'T WAIT FOR ONE LINE TO FINISH BEFORE GOING TO THE NEXT LINE
//IT DOESN'T BLOCK THE CODE FOR 3 SECONDS, IT'S RUNNING IN THE BACKGROUND JUST AS AN ALARM OR SIMILAR
setTimeout(function() {
    console.log('TimeOut1');
    console.log('TimeOut2');
}, 3000);   //THIS FUNCTION ALLOW US TO RUN SOMETHING IN THE FUTURE

console.log('next line 1');   //IT DISPLAYS THIS BEFORE setTimeOut
*/

//IT RUNS THE CODE EVERYTIME THE TIME ENDS
/*
setInterval(function() {
    console.log('Interval');
},3000);  //TAKES THE SAME PARAMETERS AS setTimeOut

console.log('next line 2');
*/

//ANONYMOUS ARRAY
//FOR EACH IS BETTER THAN A FOR CYCLE
[
    'make dinner',
    'wash dishes',
    'walk dogs'
].forEach(function(value, index) {
    if(value === 'wash dishes') {
        return;
        //IT SKIPS THIS VALUE, JUST AS CONTINUE
        /*
            IF WE NEED TO USE BREAK
            THEN IT'S BETTER TO USE A REGULAR LOOP
        */
    }
    console.log(value,index);
}); //A FUNCTION TO RUN AN ARRAY