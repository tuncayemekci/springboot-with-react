import React from 'react';
import './App.css';
import {Container, Row, Jumbotron, Col, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";


function App() {

  const marginTop = {
      marginTop: "20px"
  };

  return (
    <Router>
        <NavigationBar />
        <Container>
            <Row>
                <Col lg={12} style={marginTop}>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/login" exact component={LoginPage} />
                        <Route path="/register" exact component={RegisterPage} />
                    </Switch>
                </Col>
            </Row>
        </Container>
        <Footer />
    </Router>
  );
}

export default App;
