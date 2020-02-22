import React from 'react';

import {Button, Jumbotron} from "react-bootstrap";

class HomePage extends React.Component{
    render(){
        return (
            <Jumbotron className="bg-dark text-white">
                <h1>Spring Boot with React</h1>
                <p>
                    This is a simple project that is an example of how to combine Spring Boot and React and how to handle login/register forms.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        )
    }
}

export default HomePage;