var Object = {
    FirstName: "Aneeque",
    LastName: "Aziz",
    email: "abc@outlook.com",
    password: 123,
    age: 24,
    gender: "male",
    city: "karachi",
    country: "Pakistan",
};
var obj = prompt("Enter Property name");
var result = Object.hasOwnProperty('age');
if (result===obj){
    alert("Found");
}
else{
    alert("Not Found");
}
var result = Object.hasOwnProperty('country');
if (result===obj){
    alert("Found");
}
else{
    alert("Not Found");
}
var result = Object.hasOwnProperty('FirstName');
if (result===obj){
    alert("Found");
}
else{
    alert("Not Found");
}
var result = Object.hasOwnProperty('LastName');
if (result===obj){
    alert("Found");
}
else{
    alert("Not Found");
}