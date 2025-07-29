let emp = {
    eid : 101,
    ename : "Rahul",
    email : "Rahul@gmail.com"
}
let details = {
    email : "rahul@tcs.com",
    address : "Waynad",
    avai : true
}
let emp_details = {...emp,...details}
console.log(emp_details)