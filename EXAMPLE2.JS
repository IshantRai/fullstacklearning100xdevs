// //hii this is only for commiting code online 
// function sum (a, b) {
//     return a + b;
// }
// console.log(sum(4, 8)); // 12
// console.log(sum(10, 20)); // 30

// // End of the code

// let ans = 0;
// for (let i = 0; i <= 100; i++) {
//     ans += i;
// }
// console.log(ans);
//     if (allPeople[i].gender === "male") {   
//         console.log(allPeople[i].firstName);
//     }
// }
// let ans = 0;
// for (let i = 0; i <= 100; i++) {
//     ans += i;
// }
// console.log(ans);    


// // for loop example

// let ans = 0;
// for (let i = 0; i <= 100; i++) {
//     ans += i;
// }
// console.log(ans);

// function sum (a, b) {
//     return a + b;
// }
// console.log(sum(4, 8)); // 12
// console.log(sum(10, 20)); // 30

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0){
//         console.log(arr[i]);
//     }
// }


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0){
//         console.log(arr[i]);
//     }
// }



// let array = [1, 2, 3, 4, 5];
// let reversedArray = [];
// for (let i = array.length - 1; i >= 0; i--) {
//     reversedArray.push(array[i]);
// }
// console.log(reversedArray);


// expected output - [5, 4, 3, 2, 1]  


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0){
        console.log(arr[i]);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0){
        console.log(arr[i]);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0){
        console.log(arr[i]);
    }
}


 ----------------------------------------------------------------
// complex example
function CalculateArithmetic(a, b, operation){
    if(operation == "sum"){
        return (a + b);
    }
    else if(operation == "multiply"){
        return (a * b);
    }
else if(operation == "divide"){
    return (a / b);
}
}
const result = CalculateArithmetic(4, 2, "sum");
console.log(result);  // 6
const result1 = CalculateArithmetic(4, 2, "multiply");
console.log(result1);  // 8