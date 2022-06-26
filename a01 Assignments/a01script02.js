window.addEventListener('DOMContentLoaded', ()=>{
    console.log("Loaded");
    document.getElementById('add').disabled = true;
    document.getElementById('remove').disabled = true;
    document.getElementById('view').disabled = true;
    document.getElementById('modify').disabled = true;
    document.getElementById('searchByDeptID').disabled = true;

    let employees = [
        {
            empno: 1,
            empname: "Lewis",
            empsal: 2500000,
            deptid: 1
        },
        {
            empno: 2,
            empname: "Michael",
            empsal: 1900000,
            deptid: 3
        },
        {
            empno: 3,
            empname: "Sebastian",
            empsal: 3000000,
            deptid: 2
        },
        {
            empno: 4,
            empname: "Daniel",
            empsal: 3000000,
            deptid: 2
        },
        {
            empno: 5,
            empname: "Max",
            empsal: 3000000,
            deptid: 3
        },
        {
            empno: 6,
            empname: "Charles",
            empsal: 3000000,
            deptid: 1
        }
    ];

    // console.log(employees);

    document.querySelector('#empno').addEventListener('blur', ()=>{
        console.log('Blur event');
        let empnoInput = document.querySelector('#empno').value;
        // console.log(empnoInput);
        if (search(empnoInput) >= 0){
            let em = getData(search(empnoInput));
            document.getElementById('add').disabled = true;
            document.getElementById('remove').disabled = false;
            document.getElementById('view').disabled = false;
            document.getElementById('modify').disabled = false;
            document.getElementById('searchByDeptID').disabled = false;
            document.querySelector('#status').innerText = "Employee Number already exists";
            document.querySelector('#empname').value = em.empname;
            document.querySelector('#salary').value = em.empsal;
            document.querySelector('#deptid').value = em.deptid;
        } else {
            document.getElementById('add').disabled = false;
            document.getElementById('remove').disabled = true;
            document.getElementById('view').disabled = false;
            document.getElementById('modify').disabled = true;
            document.getElementById('searchByDeptID').disabled = true;
            document.querySelector('#status').innerText = "Employee Number does not exists";
            document.querySelector('#empname').value = "";
            document.querySelector('#salary').value = "";
            document.querySelector('#deptid').value = "";
        }
    });
	
	document.querySelector('#add').addEventListener('click', ()=>{
            employees.push({
                empno: document.querySelector('#empno').value,
                empname: document.querySelector('#empname').value,
                empsal: document.querySelector('#salary').value,
                deptid: document.querySelector('#deptid').value
            });
            console.log("Added")
    })

    document.querySelector('#remove').addEventListener('click',()=>{
        employees.splice(search(empnoInput), 1);
        console.log('Employee Deleted');
        document.querySelector('#empno').value = "";
        document.querySelector('#empname').value = "";
        document.querySelector('#salary').value = "";
        document.querySelector('#deptid').value = "";
    });

    document.querySelector('#view').addEventListener('click', ()=>{
        document.querySelector('#output').innerHTML = view();
    });

    document.querySelector('#modify').addEventListener('click', ()=>{
        let newName = prompt('Enter New Name');
        let newSal = prompt('Enter new Salary');
        let newDeptID = prompt('Enter new Department ID');
        let index = search(empnoInput);
        employees[index].empname = newName;
        employees[index].empsal = newSal;
        employees[index].deptid = newDeptID;
        document.querySelector('#empname').value = newName;
        document.querySelector('#salary').value = newSal;
        document.querySelector('#deptid').value = newDeptID;
        console.log('Modified');
    });

    document.querySelector('#searchByDeptID').addEventListener('click', ()=>{
        console.log("Search By ID clicked");
        document.querySelector('#output').innerHTML = searchByDept();
    });

    function searchByDept(){
        let output = "";
        for (let i = 0; i < employees.length; i++){
            if (employees[i].deptid == document.querySelector('#deptid').value) {
                output += `Employee Number: ${employees[i].empno} | Employee Name: ${employees[i].empname} | Salary: ${employees[i].empsal} | Department ID: ${employees[i].deptid} <br>`;
            }
        }
        return output;
    }

    
    function search(num) {
        for (let i = 0; i < employees.length; i++){
            if (employees[i].empno == num) {
                return i;
            }
        }
        return -1;
    }

    function getData(index){
        let employee = employees[index];
        return employee;
    }

    function view(){
        let output = "";
        for (let i = 0; i < employees.length; i++){
            output += `Employee Number: ${employees[i].empno} | Employee Name: ${employees[i].empname} | Salary: ${employees[i].empsal} | Department ID: ${employees[i].deptid} <br>`;
        }
        return output;
    }
})