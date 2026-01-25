// // //hii this is only for commiting code online 
// // function sum (a, b) {
// //     return a + b;
// // }
// // console.log(sum(4, 8)); // 12
// // console.log(sum(10, 20)); // 30

// // // End of the code

// // // let ans = 0;
// // // for (let i = 0; i <= 100; i++) {
// // //     ans += i;
// // // }
// // // console.log(ans);
// // //     if (allPeople[i].gender === "male") {   
// // //         console.log(allPeople[i].firstName);
// // //     }

// // // let array = [1, 2, 3, 4, 5];
// // // let reversedArray = [];
// // // for (let i = array.length - 1; i >= 0; i--) {
// // //     reversedArray.push(array[i]);
// // // }
// // // console.log(reversedArray);


// // // expected output - [5, 4, 3, 2, 1]    


// // // let array = [1, 2, 3, 4, 5];
// // // let reversedArray = [];
// // // for (let i = array.length - 1; i >= 0; i--) {
// // //     reversedArray.push(array[i]);
// // // }
// // // console.log(reversedArray);

// // let array = [1, 2, 3, 4, 5];
// // let reversedArray = [];
// // for (let i = array.length - 1; i >= 0; i--) {
// //     reversedArray.push(array[i]);
// // }
// // console.log(reversedArray);


// // expected output - [5, 4, 3, 2, 1]  


// // function sum(num1, num2, fnToCall) {
// //     let result = num1 + num2;
// //     fnToCall(result);
// // }

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



//  ----------------------------------------------------------------
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


// const allPeople = [{
//     firstName: "rahul",
//     gender: "male"
// },{
//     firstName: "rohit",
//     gender: "male"
// },{
//     firstName: "neha",
//     gender: "female"
// },{
//     firstName: "priya",
//     gender: "female"
// },{
//     firstName: "sonal",
//     gender: "male"          
// }];
// for (let i =0 ; i < allPeople.length; i++) {
//     if(allPeople[i]["gender"] === "male"){
//         console.log(allPeople[i]["firstName"]);
//     }
// }


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0){
//         console.log(arr[i]);
//     }
// }


const allPeople = [{
    firstName: "rahul",
    gender: "male"
},{
    firstName: "rohit",
    gender: "male"
},{
    firstName: "neha",
    gender: "female"
},{
    firstName: "priya",
    gender: "female"
},{
    firstName: "sonal",
    gender: "male"          
}];
for (let i =0 ; i < allPeople.length; i++) {
    if(allPeople[i]["gender"] === "male"){
        console.log(allPeople[i]["firstName"]);
    }
}


//# complex prmitive data types(array, object literals, functions, date, regex)
// Let's write some code -
// 1. Write a program prints all the even numbers in an array
// 2. Write a program to print the biggest number in an arrya
// 3. Write a program that prints all the male people's first name given a complex object
// 4. Write a program that reverses all the elements of an array

//#simple primitive data types(string, number, boolean, null, undefined, symbol)
let name = "harry";
console.log("my string is " + name);
console.log("data type is " + (typeof name));
