import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button} from 'react-bootstrap';

import './Header.css';

function Header() {
    return (
        <React.Fragment> 
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
        </React.Fragment>
    );
  }


export default Header;