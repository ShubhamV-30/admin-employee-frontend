import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

const AdminDashboard = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('https://empmanagement-backend.vercel.app/admin/getall').then(res => setEmployee(res.data));
  })
  const deleteEmployee = (id) => {
    axios.delete(`https://empmanagement-backend.vercel.app/admin/delete/${employee._id}`).then(res => console.log(res.data))
  }
  return (
    <>
      <div>
        <center><h1>Admin-dashboard</h1></center>
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand>admin-portal</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="click here to signup and signin"
                  menuVariant="dark"
                >
                  <NavDropdown.Item><Link to="/AdminSignup">signup</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item><Link to="/AdminSignin">signin</Link></NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div style={{ minHeight: 'calc(100vh - 10rem)', width: '80%', margin: '0 auto', marginTop: '3rem', display: 'grid', placeItems: 'center', border: '2px solid #ddd' }}>
          <center><h1 style={{ color: 'blue' }}>WELCOME TO ADMIN-DASHBOARD</h1></center>
          <center><h2>made by rajni saini</h2></center>
          <div style={{ backgroundColor: 'pink', margin: '10px 0px', padding: '20px 30px', border: '1px solid black', borderRadius: '12px', textDecoration: 'none' }} >
            <h1><Link to="/EmpDashboard">GO TO EMPLOYEE-DASHBOARD</Link></h1>
          </div>
        </div>
      </div>
      <div style={{ width: '80%', marginInline: 'auto', border: '2px solid #ddd' }}>
        {
          employee.map(employee => <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
            <div>{employee.name}</div>
            <div>{employee.email}</div>

            <Button onClick={() => navigate(`/admin/edit/${employee._id}`)}>Edit</Button>
            <Button onClick={() => {
              deleteEmployee(employee._id)
            }}>Delete</Button>
          </div>)
        }
      </div>

    </>
  )
}

export default AdminDashboard