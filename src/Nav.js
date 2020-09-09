import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Navbar, NavLink, Form, FormControl, Button, NavbarBrand, NavDropdown} from 'react-bootstrap';
import './Nav.css';

function NavStory() {
    return (
     
      <div>  
            <Navbar expand="lg" className="mb-4 navback">
                <Navbar.Brand href="#home" id='nav-brand' >StoryTellers</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">STORIES</Nav.Link>
                        <Nav.Link href="#link">STORYTELLERS</Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Personal</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Inspirational</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Daily Encounter</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Rising Stories</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
      </div>
        

    );
  }


export default NavStory;