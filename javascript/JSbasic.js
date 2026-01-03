////#simple primitive data types(string, number, boolean, null, undefined, symbol)
// let name = "harry";
// console.log("my string is " + name);
// console.log("data type is " + (typeof name));

//// for loop example

// let ans = 0;
// for (let i = 0; i <= 100; i++) {
//     ans += i;
// }
// console.log(ans);

// //# complex prmitive data types(array, object literals, functions, date, regex)
// // Let's write some code -
// // 1. Write a program prints all the even numbers in an array
// // 2. Write a program to print the biggest number in an arrya
// // 3. Write a program that prints all the male people's first name given a complex object
// // 4. Write a program that reverses all the elements of an array

// //1. write a program to print all even numbers in an array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0){
//         console.log(arr[i]);
//     }
// }


// // 3. Write a program that prints all the male people's first name given a complex object

// const peopleArray = ["rahul", "rohit", "neha", "priya", "sonal"];
// const genderArray = ["male", "male", "female", "female", "male"];
// for (let i = 0; i < peopleArray.length; i++) {
//     if (genderArray[i] === "male") {
//         console.log(peopleArray[i]);
//     }   
// }

// // expected output -
// // rahul
// // rohit
// // sonal
 
// // using object literals

// // using array of objects [{}, {}, {}]

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

// // expected output -
// // rahul
// // rohit
// // sonal

// // 4. Write a program that reverses all the elements of an array

// let array = [1, 2, 3, 4, 5];
// let reversedArray = [];
// for (let i = array.length - 1; i >= 0; i--) {
//     reversedArray.push(array[i]);
// }
// console.log(reversedArray);

// // expected output - [5, 4, 3, 2, 1]

// let array = [1, 2, 3, 4, 5];
// let reversedArray = [];
// for (let i = array.length - 1; i >= 0; i--) {
//     reversedArray.push(array[i]);
// }
// console.log(reversedArray);

// // expected output - [5, 4, 3, 2, 1]

// // Another method to reverse an array

// // way1
// let array = [1, 2, 3, 4, 5];
// let reversedArray = [];

// for (let i = 0; i < array.length; i++) {
//     reversedArray.unshift(array[i]); // adds to the beginning
// }

// console.log(reversedArray); // [5, 4, 3, 2, 1]
// // expected output - [5, 4, 3, 2, 1]

// // way2
// let array = [1, 2, 3, 4, 5];
// let reversedArray = [];

// while (array.length > 0) {
//     reversedArray.push(array.pop());
// }

// console.log(reversedArray); // [5, 4, 3, 2, 1]

// // pop() removes the last element from array, and push() adds it to reversedArray.
// // expected output - [5, 4, 3, 2, 1]

// // way3
// // The easiest — built-in .reverse()
// // .slice() creates a copy so that .reverse() doesn’t modify the original array.

// let array = [1, 2, 3, 4, 5];
// let reversedArray = array.slice().reverse();
// console.log(reversedArray); // [5, 4, 3, 2, 1]

// // expected output - [5, 4, 3, 2, 1]

//REVIEW OF STRING METHODS
// READY 1JAN STUDY 2JAN GO 3JAN