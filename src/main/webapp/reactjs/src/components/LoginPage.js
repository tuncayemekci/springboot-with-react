import React from 'react';

import {Form, Button} from 'react-bootstrap';
import Profile from "./Profile";
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleEmail = (e) => {
        this.setState({email: e.target.value})
    };

    handlePassword = (e) => {
        this.setState({password: e.target.value})
    };

    login = () => {
        console.warn(this.state)
        axios.get(`http://localhost:8080/rest/user/${this.state.email}`)
            .then(resp => {
                if(resp.data.USER_PASSWORD == this.state.password){

                    localStorage.setItem("session", resp.data.USER_EMAIL)
                    this.props.history.push("/profile");
                } else {
                    this.setState({data: {}})
                    alert("Please check email and password")
                }
            })
            .catch(err => console.error(err))

    };

    render(){
        return(
            <div className="text-white">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={e => {this.handleEmail(e)}}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => {this.handlePassword(e)}}/>
                    </Form.Group>

                    <Button variant="primary" onClick={this.login} >
                        Submit
                    </Button>
                </Form>
            </div>


        )
    }
}

export default LoginPage;