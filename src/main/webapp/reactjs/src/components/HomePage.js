import React from 'react';

import {Button, Jumbotron} from "react-bootstrap";

const HomePage = () => {
    console.log("Rendering Home");
    return (
        <Jumbotron className="bg-dark text-white text-center">
            <h1>Spring Boot with React</h1>
            <p>
                This is a simple project that is an example of how to combine Spring Boot and React and how to handle login/register forms.
            </p>
        </Jumbotron>
    )
}

export default HomePage;