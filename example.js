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


let ans = 0;
for (let i = 0; i <= 100; i++) {
    ans += i;
}
console.log(ans);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0){
        console.log(arr[i]);
    }
}