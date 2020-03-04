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
import Store, {LoginContext, UserContext} from "./Store";



const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);
    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        if(localStorage.getItem("session")){
            console.warn("Kullanıcı var!")
            setIsLoggedIn(true);
        }
    }, [isLoggedIn]);

    useEffect(() => {
        if(user){
            localStorage.setItem("session", user.USER_EMAIL);
        }
        console.warn("2. useEffect ---> isLoggedIn:" + isLoggedIn + "  User: " + user);
    }, [user]);

    return (
        <Store>
            <Router>
                <NavigationBar/>
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
                                        <LoginPage {...props}/>
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
                                        <Logout {...props}/>
                                    )}
                                />
                            </Switch>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </Router>
        </Store>
    )

}

export default App;
