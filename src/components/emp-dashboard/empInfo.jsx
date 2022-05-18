import React from 'react'

const EmpInfo = (props) => {
  const data = localStorage.getItem('user');
  const updateData = JSON.parse(data)
  const newValue = updateData && updateData.data;
  return (
    <>
    <div className='empinfo'>
      <center><h1>EMPLOYEE-INFORMATION</h1></center>
      <h4>
        name: {newValue && newValue.user && newValue.user.name}
      </h4>
      <h4>

        Email: {newValue && newValue.user && newValue.user.email}
      </h4>
    </div>
    </>
  );
  }


export default EmpInfo;




// function Employee(props) {
//   return <div style={{border:"3px solid red"}}>
//           <p>Employee ID : <b>{props.data.Id}</b></p>

//       <p>Employee Name : <b>{props.data.Name}</b></p>

//       <p>Employee Location : <b>{props.data.Location}</b></p>

//       <p>Employee Salary : <b>{props.data.Salary}</b></p>
//   </div>

// }

// function displayEmployees(props){
//   const empList=props.employeeList;

//   const listElements = list.map((emp) =>
//     <Employee key={emp.Id}  data={emp} />
//   );
//   return (
//     <div>
//       {listElements}
//     </div>
//   );
// }

// const employees = [

//   {Id:101,Name:'Abhinav',Location:'Bangalore',Salary:12345},

//   {Id:102,Name:'Abhishek',Location:'Chennai',Salary:23456},

//   {Id:103,Name:'Ajay',Location:'Bangalore',Salary:34567}

// ];






   
  



