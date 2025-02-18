/*
const myarray = [10,15,20,25,30,35,40];
console.log(myarray);       //EVERY VALUE IN THE ARRAY
console.log(myarray[2]);    //AN SPECIFIC POSITION IN THE ARRAY

//WE CAN CHANGE THE VALUE OF THE POSITION WE WANT
console.log(`POSITION 1: ${myarray[1]}`);

myarray[1] = 99;
console.log(`VALUE CHANGE OF POSITION 1: ${myarray[1]}`);

//WE CAN PUT WHATEVER VALUE WE WANT INTO AN ARRAY
const randomArray = [1,'hello',true,{name: 'socks'} [1,2]];

console.log(typeof [1,2]);

//WE CAN OBSERVE ARRAYS ARE OBJECTS
console.log(Array.isArray([1,2]));

console.log(myarray.length);    //SO WE CAN USE POINTS
myarray.push(100);  //IT WILL ADD A VALUE AT THE END OF THE ARRAY
console.log(myarray);

myarray.splice(0,1);    //INDEX WE WANT TO REMOVE, NUMBER OF VALUES TO REMOVE
console.log(myarray);
*/

const toDoList = [
{name: 'Wash Dishes',dueDate: '2025-10-22'},
{name: 'Make Dinner',dueDate: '2025-10-22'}];//EMPTY ARRAY WITH AN OBJECT

renderToDoList();

function renderToDoList() {
    //ACUMULATION PATTERN
    let toDoListHTML = '';

    //WE ARE GOING TO CHECK ALL THE ARRAY TO SHOW IT IN THE PARAGRAPH
    for (let i = 0; i < toDoList.length; i++) {
        const toDoObject = toDoList[i];
        //const name = toDoObject.name;
        //const dueDate = toDoObject.dueDate;
        const {name, dueDate} = toDoObject;  //DISTRUCTURING IS A SHORT WAY FROM UP
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-toDo-button" onclick="
            toDoList.splice(${i},1);
            renderToDoList();
        ">
            Delete
        </button>
        `;
        toDoListHTML += html;
        console.log(toDoListHTML);
    }

    document.querySelector('.js-toDo-list')
    .innerHTML = toDoListHTML;
}

function addToDo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    //IF THE VARIABLE AND THE TYPE OF VALUE FROM THE OBJECT IS THE SAME, WE CAN DO THIS, SHORTHAND PROPERTY
    toDoList.push({name, dueDate}); //WE ARE ADDING THE VALUE IN THE ARRAY AS AN OBJECT
    //IF IT'S DIFFERENT WE JUST ADD: name: name, dueDate: dueDate INSTEAD
    
    console.log(toDoList);

    inputElement.value = '';    //CLEAN THE TEXTBOX

    renderToDoList();   //THIS REFRESH THE LIST EVERY TIME WE ADD SOMETHING
}

/*
    3 main steps for this situation

    1.- SAVE THE DATA
    2.- GENERATE THE HTML
    3.- MAKE IT INTERACTIVE
*/