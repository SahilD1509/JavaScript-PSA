let employees = [
    { eid: 101, ename: "Rahul", esal: 45000 },
    { eid: 102, ename: "Priyanka", esal: 35000 },
    { eid: 103, ename: "Sonia", esal: 55000 }
];

// Add a callback to ensure sequencing
let createEmployee = (emp, callback) => {
    setTimeout(() => {
        employees.push(emp);
        console.log("Employee added:", emp);
        callback();  // Now call getEmployees
    }, 4000);
};

let getEmployees = () => {
    setTimeout(() => {
        let rows = "";
        for (let emp of employees) {
            rows += `<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.esal}</td>
                     </tr>`;
        }
        document.getElementById('table_Data').innerHTML = rows;
        console.log("Employees displayed.");
    }, 2000);
};

// Start sequence
createEmployee({ eid: 104, ename: "Modi", esal: 34590 }, getEmployees);
