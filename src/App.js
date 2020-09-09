import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ContainerFluid, Row, Col, Card, Jumbotron, Button} from 'react-bootstrap';
import './App.css';
import Story_Card from './Story_Card.js';
import SocialFollow from './SocialFollow.js';
import NavStory from './Nav.js';

function App() {
  return (
    <div className="App">  
        <NavStory />
        <Container fluid={true} id='header' className="mb-5">
          
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
          </Row>
        </Container>
    </div>
  );
}

export default App;
