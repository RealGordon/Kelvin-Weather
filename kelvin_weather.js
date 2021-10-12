/* 
A program to convert temperature in kelvin to
Celsius and finally Fahrenheit
*fscp-javascript-syntax-part-i*
__author: gordon.amamoo@amlitech.org
*/
//Kelvin constant
const kelvin=293;

//Convert to Celsius
let celsius=kelvin-273;

//computing Fahrenheit
let fahrenheit=celsius*(9/5)+32;

//Rounding down the computed temperature to the nearest integer
fahrenheit=Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit}  degrees Fahrenheit.`);


//Extra practice
/* 
Converting celsius  temperature to 
newton temperature
*/

let newton=Math.floor(celsius*(33/100));
console.log(`The temperature is ${newton} degrees Newton.`);

