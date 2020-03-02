import React from 'react';

import {Form, Button, Col} from 'react-bootstrap';
import axios from 'axios';

class LoginPage extends React.Component {

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

    login = () => {
        console.warn(this.state)
        axios.get(`http://localhost:8080/rest/user/${this.state.email}`)
            .then(resp => {
                if(resp.data.USER_PASSWORD === this.state.password){
                    this.props.handleLogin(resp.data);
                    this.props.history.push("/profile");
                } else {
                    alert("Please check email and password")
                }
            })
            .catch(err => console.error(err))

    };

    render(){
        return(
            <Col md={{span: 4, offset: 4}} xs={{span: 6, offset: 3}} className="text-white">
                <h1 className="text-center">Log In</h1>
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
            </Col>


        )
    }
}

export default LoginPage;