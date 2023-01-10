/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(x, y) {
//     // Code block
//     return x + y;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers = (x, y) => {
    // Code block
    return x + y;
}
let sum = addTwoNumbers(2, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (x, y) => (x + y); also valid
const addTwoNumbers2 = (x, y) => x + y;

// Implicit Returns
const saySomething = message => console.log(message);
saySomething("Hello world!");

const sayHello = () => console.log("Hello there!");
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        This is a multiline string!
    </p>
    `
)

console.log(returnMultipleLines());