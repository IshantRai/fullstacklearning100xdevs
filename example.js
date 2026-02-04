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
