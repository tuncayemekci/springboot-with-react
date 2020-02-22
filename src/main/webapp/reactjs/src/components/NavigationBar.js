import React from 'react';

import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavigationBar extends React.Component {
    render(){
       return(
           <Navbar bg="dark" variant="dark">
               <Nav className="mr-auto">
                   <Link to="/" className="nav-link">Home</Link>
                   <Link to="/login" className="nav-link">Login</Link>
                   <Link to="/register" className="nav-link">Register</Link>
               </Nav>
           </Navbar>
       )
    }
}

export default NavigationBar;