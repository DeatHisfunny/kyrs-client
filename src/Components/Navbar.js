import {Button, Form, FormControl, Nav, Navbar, NavDropdown, Container} from "react-bootstrap";
import React from "react";
import '../DarkMode/dark-mode.css';
import '../DarkMode/dark-mode-switch';
import '../DarkMode/dark-mode-switch.min';




function NavbarGuest() {

    return (


        <div className="App">
            <Navbar bg="light" expand="lg">

                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/registration">Registration</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <NavDropdown title="users" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/account">Account</NavDropdown.Item>
                            <NavDropdown.Item href="/setting">Account setting</NavDropdown.Item>


                        </NavDropdown>

                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                        <Container>
                            <div className="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input" id="darkSwitch"/>
                                <label className="custom-control-label" htmlFor="darkSwitch">Dark Mode</label>
                            </div>
                            <script src="../DarkMode/dark-mode-switch.min.js" defer></script>
                        </Container>


                    </Form>
                </Navbar.Collapse>
            </Navbar>


        </div>
    );
}

export default NavbarGuest;
