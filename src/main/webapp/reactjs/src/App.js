import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Profile from "./components/Profile";
import Logout from "./components/Logout";


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: "false",
            user: {}
        }
    }

    componentDidMount() {
        if(localStorage.getItem("session")){
            this.setState({isLoggedIn:"true"});
        }
    };

    handleLogin = (data) => {
        this.setState({
            isLoggedIn: "true",
            user: data
        });

        localStorage.setItem("session", data.USER_EMAIL);
    };

    handleLogout = (exit) => {
        if(exit === "LOGOUT"){
            this.setState({
                isLoggedIn: "false",
                user: {}
            });

            localStorage.removeItem("session");
        }
    }


    render(){
        return (
            <Router>
                <NavigationBar isLoggedIn={this.state.isLoggedIn}/>
                <Container>
                    <Row>
                        <Col lg={12} style={{marginTop: "20px"}}>
                            <Switch>
                                <Route
                                    path="/"
                                    exact
                                    component={HomePage}
                                />
                                <Route
                                    path="/login"
                                    exact
                                    render={props => (
                                        <LoginPage {...props} handleLogin={this.handleLogin} />
                                    )}
                                />
                                <Route
                                    path="/signup"
                                    exact
                                    component={SignupPage}
                                />
                                <Route
                                    path="/profile"
                                    exact
                                    component={Profile}
                                />
                                <Route
                                    path="/logout"
                                    exact
                                    render={props => (
                                        <Logout {...props} handleLogout={this.handleLogout} />
                                    )}
                                />
                            </Switch>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </Router>
        )
    }


}

export default App;
