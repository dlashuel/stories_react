import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ContainerFluid, Row, Col, Card, Jumbotron, Button} from 'react-bootstrap';
import './App.css';
import Story_Card from './Story_Card.js';
import SocialFollow from './SocialFollow.js';
import NavStory from './Nav.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App"> 

        <NavStory />
        
        <Container fluid={true} id='header' className="mb-5">
          <Row>
            <Col lg={{offset:1, span:6}} className="text-left mt-5">
              <h1 className='header-title'>"There's always room for a story <br></br>
                that can transport people<br></br>
                to another place."</h1>
                <hr/>
                <div className='sub-header'>J.K Rowling</div>
            </Col>
            <Col className="row align-items-end">
              <Button className="header-button mr-5" variant="outline-primary">Tell a Story</Button>
              <Button className="header-button" variant="outline-primary">Read Stories</Button>
            </Col>
          </Row>
          
        </Container>

        <Container fluid={true} >
          <Row>
            <Col xs={12} md={6} lg={4} className=''>
              <Story_Card />
            </Col>
            <Col xs={12} md={6} lg={4} className=''>
              <Story_Card />
            </Col>
            <Col xs={12} md={6} lg={4} className=''>
              <Story_Card />
            </Col>

            <Col xs={12} md={6} lg={4} className=''>
              <Story_Card />
            </Col>
            <Col xs={12} md={6} lg={4} className=''>
              <Story_Card />
            </Col>
            <Col xs={12} md={6} lg={4} className=''>
              <Story_Card />
            </Col>
          </Row>
        </Container>

        <Footer />
    </div>
  );
}

export default App;
