import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React from "react";

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
                        <NavDropdown title="User" id="navbarScrollingDropdown">
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
                    </Form>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
}

export default NavbarGuest;
