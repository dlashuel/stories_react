import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Navbar, NavLink, Form, FormControl, Button, NavbarBrand, NavDropdown} from 'react-bootstrap';
import './Nav.css';

function NavStory() {
    return (
     
      <div>  
            <Navbar expand="lg" className=" navback mx-4" >
                <Navbar.Brand href="#home" id='nav-brand' >StoryTellers</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" id="nav-link">STORIES</Nav.Link>
                        <Nav.Link href="#link" id="nav-link">STORYTELLERS</Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" id="nav-drop-item">Personal</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" id="nav-drop-item">Inspirational</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" id="nav-drop-item">Daily Encounter</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Rising Stories</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <Nav.Link className="mr-5 h4 pt-3" href="#home" id="nav-link">Sign In</Nav.Link>
                        <FormControl type="text" placeholder="Search for stories and storytellers" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
      </div>
        

    );
  }


export default NavStory;