import React, { useState, useEffect } from 'react';
import {Col, Button, Form} from "react-bootstrap";
import axios from 'axios';

const SignupPage = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if(localStorage.getItem("session")){
            props.history.push("/profile");
        }
    }, []);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };


    const handleSignup = () => {
        axios.get(`http://localhost:8080/rest/user/${email}`)
            .then(resp => {
                    console.warn(resp)
                    if(resp.data.id) {
                        console.warn("Böyle bir kullanıcı var")
                    } else {
                        axios.post(`http://localhost:8080/rest/add-user`, {USER_EMAIL: email, USER_PASSWORD: password})
                            .then(resp => {
                                console.warn("axios post: " + resp.data);
                                props.history.push("/login");
                            })
                    }
                })

    }

    return(
        <Col md={{span: 4, offset: 4}} xs={{span: 6, offset: 3}} className="text-white">
            <h1 className="text-center">Sign Up</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => {handleEmail(e)}}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => {handlePassword(e)}}/>
                </Form.Group>

                <Button variant="primary" onClick={handleSignup} >
                    Submit
                </Button>
            </Form>
        </Col>
    )
};

export default SignupPage;