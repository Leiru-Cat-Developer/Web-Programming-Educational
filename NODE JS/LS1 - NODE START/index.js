/* 
    WE ARE DOING A FEEDBACK ABOUT OUR JS COURSE
*/

//VARIABLES
let username = 'Uriel';
let age = 24;
let hasHobbies = true;
let points = [10, 20, 30];
let user = {
    name: 'Manuel',
    lastName: 'Mitomano'
};
const PI = 3.1416;

//MESSAGES
console.log(username);
console.log(age);
console.log(hasHobbies);
console.log(points);
console.log(user);
console.log(PI);

if (age > 18) {
    console.log(`You're an adult`);
} else if (age > 13) {
    console.log(`You're an adolescent`);
} else {
    console.log(`You're a child`);
}

const names = ['Uriel', 'Marco', 'Juan'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//SUMMARY OF AN ARROW FUNCTION
const showUserInfor = (user, age) => `The usernames names is ${user}, she/he is ${age} years old`;

console.log(showUserInfor('Joe', 50));
console.log(showUserInfor('Mike', 30));