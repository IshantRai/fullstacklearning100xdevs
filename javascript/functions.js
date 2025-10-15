// // #FUNCTIONS
// /*Functions let you
// 1. Abstract out logic in your program
// 2. Take arguments as an input
// 3. Return a value as an output
// 4. You can think of them as an independent program that is supposed to do something
// given an input
// 5. Functions CAN take other functions as input - this will confuse you (callbacks)
// */

// // Q1 write the code for the function that finds the sum of two numbers

// function sum (a, b) {
//     return a + b;
// }
// console.log(sum(4, 8)); // 12
// console.log(sum(10, 20)); // 30

// const value = sum (32, 5)
// console.log(value); // 37   

// // Q2. Write another function that takes this sum and prints it in passive tense
// //Q [[[

// function sum(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// // You are only allowed to call one function after this
// // How will you displayResult of a sum

// //  ]]]

// let result = sum(4, 5);
// displayResult(result); //displayResult of a sum
// displayResultPassive(result); //displayResultPassive of a sum

// // or pass the function as an argument
// //function callbacks(fuToCall)

// function sum(num1, num2, fnToCall) {
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// // // You are only allowed to call one function after this
// // // How will you displayResult of a sum

// const result1 = sum(4, 5, displayResult); //displayResult of a sum
// const result2 = sum(4, 5, displayResultPassive); //displayResultPassive of a sum

// //  ----------------------------------------------------------------
// // complex example
// function CalculateArithmetic(a, b, operation){
//     if(operation == "sum"){
//         return (a + b);
//     }
//     else if(operation == "multiply"){
//         return (a * b);
//     }
// else if(operation == "divide"){
//     return (a / b);
// }
// }
// const result = CalculateArithmetic(4, 2, "sum");
// console.log(result);  // 6
// const result1 = CalculateArithmetic(4, 2, "multiply");
// console.log(result1);  // 8


// // //exmp 2 
// // passing fun insde a fun and doing callback

// function Calculate(a, b, operationFunction){
//     return operationFunction(a, b);
// }
// function sum(a, b){
//     return a + b;
// }
// const result = Calculate(4, 2, sum);
// console.log(result);  // 6

