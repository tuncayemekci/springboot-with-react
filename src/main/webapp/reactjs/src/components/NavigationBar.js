import React from 'react';

import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavigationBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: this.props.isLoggedIn
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
            this.setState({isLoggedIn: this.props.isLoggedIn});
        }
    }

    render(){
        console.warn("NavigationBar.js: this.state.isLoggedIn --->" + this.state.isLoggedIn + "   this.props.isLoggedIn --->" + this.props.isLoggedIn);

        return(
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    { this.state.isLoggedIn === "false" ?
                        (
                            <>
                                <Link to="/login" className="nav-link">Login</Link>
                                <Link to="/signup" className="nav-link">Signup</Link>
                            </>
                        ) : (
                            <Link to="/profile" className="nav-link">Profile</Link>
                        ) }
                </Nav>
                { this.state.isLoggedIn === "true" ? (<Nav><Link to="/logout" className="nav-link">Logout</Link></Nav>) : "" }
            </Navbar>
        )
    }
}

export default NavigationBar;