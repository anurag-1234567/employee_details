

username=localStorage.getItem('USERNAME');
document.getElementById("head1").innerHTML=`Welcome ${username}`
  

//
//to add a employee
function addEmployee()
{
employee={
    id:empId.value,
    name:empName.value,
    addr:empAddress.value,
    desg:empDesignation.value,
    exp:empExperience.value,
    sal:empSalary.value
}


if(employee.id in localStorage)
{
    alert("employee already exist")
}
else{
    localStorage.setItem(employee.id,JSON.stringify(employee))
    alert("employee added")

empId.value=""
empName.value=""
empAddress.value=""
empDesignation.value=""
empExperience.value=""
empSalary.value=""


}
}



//search box


function search(){


    let key=emps.value;

    if(key in localStorage)
    {
    let employee=JSON.parse(localStorage.getItem(key));
    result.innerHTML = `

    <div style="
        width: 350px;
        background: white;
        margin: 30px auto;
        padding: 25px;
        border-radius: 15px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        font-family: Arial, sans-serif;
    ">

        <h2 style="
            margin-top: 0;
            margin-bottom: 20px;
            color: #667eea;
            text-align: center;
            border-bottom: 2px solid #667eea;
            padding-bottom: 10px;
        ">
            Employee Details
        </h2>

        <div style="
            margin: 12px 0;
            padding: 10px;
            background: #f5f6fa;
            border-radius: 7px;
        ">
            <strong>Employee ID:</strong>

            <span style="
                float: right;
                color: #555;
            ">
                ${employee.id}
            </span>
        </div>

        <div style="
            margin: 12px 0;
            padding: 10px;
            background: #f5f6fa;
            border-radius: 7px;
        ">
            <strong>Name:</strong>

            <span style="
                float: right;
                color: #555;
            ">
                ${employee.name}
            </span>
        </div>

        <div style="
            margin: 12px 0;
            padding: 10px;
            background: #f5f6fa;
            border-radius: 7px;
        ">
            <strong>Address:</strong>

            <span style="
                float: right;
                color: #555;
            ">
                ${employee.addr}
            </span>
        </div>

        <div style="
            margin: 12px 0;
            padding: 10px;
            background: #f5f6fa;
            border-radius: 7px;
        ">
            <strong>Designation:</strong>

            <span style="
                float: right;
                color: #555;
            ">
                ${employee.desg}
            </span>
        </div>

        <div style="
            margin: 12px 0;
            padding: 10px;
            background: #e3f2fd;
            border-radius: 7px;
        ">
            <strong>Experience:</strong>

            <span style="
                float: right;
                color: #555;
            ">
                ${employee.exp} years
            </span>
        </div>

        <div style="
            margin: 12px 0;
            padding: 10px;
            background: #e8f5e9;
            border-radius: 7px;
        ">
            <strong>Salary:</strong>

            <span style="
                float: right;
                color: #555;
            ">
                ₹${employee.sal}
            </span>
        </div>

    </div>

`;
}
else{
    alert("employye does not exist")
}
}