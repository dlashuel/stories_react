import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Navbar, NavLink, Form, FormControl, Button, NavbarBrand, NavDropdown} from 'react-bootstrap';
import './Navi.css';

function Navi() {
    return (
        <React.Fragment> 
            <Navbar expand="lg" className=" navback " >
                <NavbarBrand href="#home" id='nav-brand' >StoryTellers</NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink href="#home" id="nav-link">STORIES</NavLink>
                        <NavLink href="#link" id="nav-link">STORYTELLERS</NavLink>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" id="nav-drop-item">Personal</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" id="nav-drop-item">Inspirational</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" id="nav-drop-item">Daily Encounter</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Rising Stories</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <Link to="/login">
                            <NavLink className="mr-5 h4 pt-3" href="#home" id="nav-link">Sign In</NavLink>
                        </Link>
                        <Link to="/signup">
                            <NavLink className="mr-5 h4 pt-3" href="#home" id="nav-link">Sign Up</NavLink>
                        </Link>
                        <FormControl type="text" placeholder="Search for stories and storytellers" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>   
        </React.Fragment>

    );
  }


export default Navi;