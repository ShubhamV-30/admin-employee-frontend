import React from 'react'
// import axios from "axios";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'






const EmpDashboard = () => {
  return (
      <>
    <div>
        <center><h1>EMPLOYEE-Dashboard</h1></center>
    <Navbar variant="dark" bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand> EMPLOYEE-PORTAL</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example">
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="click here to signup and signin"
          menuVariant="dark"
        >
          <NavDropdown.Item href="/EmployeSignup">
            <Link to="/EmployeSignup">Signup</Link>
          </NavDropdown.Item>
          {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
          <NavDropdown.Divider />
          <NavDropdown.Item href="EmployeSignin"><Link to="EmployeSignin">Signin</Link></NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div style={{minHeight: 'calc(100vh - 10rem)',width: '80%', margin: '0 auto',marginTop: '3rem', display: 'grid', placeItems: 'center', border: '2px solid #ddd'}}>
<center><h1 style={{color: 'blue'}}>WELCOME TO EMPLOYEE-DASHBOARD</h1></center>
        
</div>
</div>
 {/* <Button variant="warning">Warning</Button> */}
</>
  )
}

export default EmpDashboard