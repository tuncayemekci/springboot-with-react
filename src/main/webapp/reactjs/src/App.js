import React, {useContext, useEffect} from 'react';
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
import {LoginContext, UserContext} from "./Store";



const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);
    const [user, setUser] = useContext(UserContext);

    // Check if there is an any session on the start.
    useEffect(() => {
        if(localStorage.getItem("session")){
            console.warn("Session var!")
            setIsLoggedIn("true");
            setUser(localStorage.getItem("session"));
        }
        console.warn("Session yok!");
    }, []);

    // Check when isLoggedIn changes.
    useEffect(() => {
        if(isLoggedIn === "true"){
            localStorage.clear();
            localStorage.setItem("session", user);
            console.warn("isLoggedIn: True")
        }

        if (isLoggedIn === "false"){
            console.warn("isLoggedIn: False");
        }

    }, [isLoggedIn]);

    return (
        <Router>
            <NavigationBar/>
            <Container>
                <Row>
                    <Col lg={12} style={{marginTop: "20px"}}>
                        <Switch>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/login" exact component={LoginPage} />
                            <Route path="/signup" exact component={SignupPage} />
                            <Route path="/profile" exact component={Profile} />
                            <Route path="/logout" exact component={Logout} />
                        </Switch>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Router>
    )

}

export default App;
