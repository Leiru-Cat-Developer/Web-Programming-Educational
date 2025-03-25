//15F
import isSatSun from './week.js';

//WE EXPORT THE ESM VERSION OF JS, DEFAULT EXPORT WHEN WE NEED JUST ONE THING
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

//15A
const afterFiveDays = dayjs();
const formatOne = afterFiveDays.add(5, 'days');    //NUMBER OF TIME, LACK
console.log(formatOne.format('MMMM, dddd'));       //FORMAT FOR DAYS COMING FROM DOCUMENTATION

//15B
const afterMonth = dayjs();
const formatTwo = afterMonth.add(30, 'days');      //NUMBER OF TIME, LACK
console.log(formatTwo.format('MMMM, dddd'));       //FORMAT FOR DAYS COMING FROM DOCUMENTATION

//15C
const beforeMonth = dayjs();
const formatThree = beforeMonth.subtract(30, 'days');       //NUMBER OF TIME, SUBSTRACT
console.log(formatThree.format('MMMM, dddd'));              //FORMAT FOR DAYS COMING FROM DOCUMENTATION

//15D
const today = dayjs();
const formatFour = today.add(0, 'days');       //NUMBER OF TIME, SUBSTRACT
console.log(formatFour.format('dddd'));        //FORMAT FOR DAYS COMING FROM DOCUMENTATION

//15E - 15G
const randomDay = dayjs();
const formatFive = randomDay.add(4, 'days');       //NUMBER OF TIME, SUBSTRACT
console.log(formatFive.format('dddd, MMMM D'));    //FORMAT FOR DAYS COMING FROM DOCUMENTATION

// function isWeekend(date) {
//     const dayOfWeek = date.format('dddd');
//     return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday'; 
// }

console.log(isSatSun(formatFive));