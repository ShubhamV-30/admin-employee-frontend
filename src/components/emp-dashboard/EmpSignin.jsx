import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import React, { useState } from "react";
import axios from "axios";
import { connect } from 'react-redux'
import { setEmployee } from "../../redux/signin/signin.action";
import { useNavigate } from 'react-router-dom';


const EmpSignin = ({ setEmployee }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ email: "", password: "" });


    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleOnClick = async () => {
        await axios
            .post("https://empmanagement-backend.vercel.app/employee/signin", user)
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data));
                console.log(res.data);
                navigate('/EmployeSignup/EmpInfo');
            })
            .catch(function (error) {
                alert(error);
            });
    };
    return (
        <>
            <div style={{ color: 'white', marginTop: '20px', backgroundColor: 'black' }}>
                <center><h1> Employee Sign-in From</h1></center>
            </div>

            <Form>
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
            </Form>
            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button onClick={handleOnClick} type="submit">Sign in</Button>
                </Col>
            </Form.Group>

        </>
    )
}
const mapDispatchToProps = dispatch => ({
    setEmployee: employee => dispatch(setEmployee(employee))
})
export default connect(null, mapDispatchToProps)(EmpSignin);
