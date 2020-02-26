import React from "react";
import {Navbar, Container, Col} from "react-bootstrap";

class Footer extends React.Component {
    render(){
        return(
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>2020 - Tuncay Alp Emekci</div>
                    </Col>
                </Container>
            </Navbar>
        )
    }
}

export default Footer;