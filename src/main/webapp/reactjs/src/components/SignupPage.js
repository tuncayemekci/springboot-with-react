import React from 'react';
import {Col, Button, Form} from "react-bootstrap";
import axios from 'axios';

class SignupPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    componentDidMount() {
        if(localStorage.getItem("session")){
            this.props.history.push("/profile");
        }
    }

    handleEmail = (e) => {
        this.setState({email: e.target.value})
    };

    handlePassword = (e) => {
        this.setState({password: e.target.value})
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    signup = () => {
        axios.get(`http://localhost:8080/rest/user/${this.state.email}`)
            .then(resp => {
                    console.warn(resp)
                    if(resp.data.id) {
                        console.warn("Böyle bir kullanıcı var")
                    } else {
                        axios.post(`http://localhost:8080/rest/add-user`, {USER_EMAIL: this.state.email, USER_PASSWORD: this.state.password})
                            .then(resp => {
                                console.warn("axios post: " + resp.data)
                            })
                    }
                })
    }

    render(){
        return(
            <Col md={{span: 4, offset: 4}} xs={{span: 6, offset: 3}} className="text-white">
                <h1 className="text-center">Sign Up</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={e => {this.handleEmail(e)}}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => {this.handlePassword(e)}}/>
                    </Form.Group>

                    <Button variant="primary" onClick={this.signup} >
                        Submit
                    </Button>
                </Form>
            </Col>
        )
    }
}

export default SignupPage;