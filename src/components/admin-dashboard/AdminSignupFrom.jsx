import React, { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'



const AdminSignup = () => {


    const [user, setUser] = useState({ 
        name: '', 
        email: '', 
        password: '', 
        confirmPassword: '' })

    const handleOnChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })

    }

    const handleOnClick = () => {
        // axios.post('https://localhost:8080/app/user/register',user)
        const url = 'https://empmanagement-backend.vercel.app/admin/signup';
        axios.post(url, user)
            .then((response) => {
                console.log(response.data);
                if (response.data) {
                    return alert('User Created Successfully')
                }
                else {
                    return alert('some error')
                }
            }

            )
            .catch(function (error) {
                console.log(error);
            });





    }

    return (
        <>
            <div style={{ color: 'white', marginTop: '20px', backgroundColor: 'black' }}>
                <center><h1>Admin Sign-up From</h1></center>
            </div>

            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                    <Form.Label column sm={2}>
                        Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="name" onChange={handleOnChange} type="Name" placeholder="Name" />

                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="email" onChange={handleOnChange} type="email" placeholder="Email" />

                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="password" onChange={handleOnChange} type="password" placeholder="Password" />

                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalConfirmPassword">
                    <Form.Label column sm={2}>
                        ConfirmPassword
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="confirmPassword" onChange={handleOnChange} type="password" placeholder="Password" />

                    </Col>
                </Form.Group>
            </Form>
            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button onClick={handleOnClick} type="submit">Sign up</Button>
                </Col>
            </Form.Group>

        </>
    )
}
export default AdminSignup;