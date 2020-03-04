import React, { useContext, useState } from 'react';
import {UserContext, LoginContext} from "../Store";

import {Form, Button, Col} from 'react-bootstrap';
import axios from 'axios';

const LoginPage = (props) => {

    const [, setIsLoggedIn] = useContext(LoginContext);
    const [user, setUser] = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const login = () => {

        axios.get(`http://localhost:8080/rest/user/${email}`)
            .then( resp => {
                if(resp.data.USER_PASSWORD === password){

                    setUser(resp.data.USER_EMAIL);
                    console.warn("User--> " + user);

                    setIsLoggedIn("true");
                    console.warn("resp.data.USER_EMAIL: " + resp.data.USER_EMAIL);

                    props.history.push("/profile");
                } else {
                    alert("Please check email and password")
                }
            })
            .catch(err => console.error(err))

    };

    return(
        <Col md={{span: 4, offset: 4}} xs={{span: 6, offset: 3}} className="text-white">
            <h1 className="text-center">Log In</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => {handleEmail(e)}}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => {handlePassword(e)}}/>
                </Form.Group>

                <Button variant="primary" onClick={login} >
                    Submit
                </Button>
            </Form>
        </Col>
    )
};

export default LoginPage;