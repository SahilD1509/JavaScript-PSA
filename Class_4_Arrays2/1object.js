//Creating an object in Javascript
var emp = {
    "eid":101,
    "ename":"Rahul",
    "esal":45000.45
}

//Reading object in JavaScript
console.log(emp)
console.log(emp.ename)
console.log("**************************")
//Updating object in JavaScript
emp.ename = "Rahul Gandhi"
emp.email = "RG@gmail.com"
console.log(emp)
console.log("**************************")
//Deleting object in javascript
delete emp.esal;
console.log(emp)