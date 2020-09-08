import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest, FaHeart, FaUsers } from "react-icons/fa";
import { Container, Row, Col, Card} from 'react-bootstrap';
import './Story_Card.css';
import {quran} from './quran.png';
import Shak from './shak.png';
import SocialFollow from './SocialFollow.js'

function Story_Card() {
  return (
    <div>
      <Card className="ml-5">
        <div className="clearfix ">
          <Card.Img  variant="top" src="https://mdbootstrap.com/img/Others/documentation/1.jpg" />
          <div className="title-hlight"></div>
        </div>
        <Card.Body className="card-body" >
          <Container>
            <Row>
              <Col xs={3} >
                <img className="author-image" src={Shak}/>
              </Col>
              <Col className="row align-items-center">
                <Row>
                  <Col xs={12}>
                    <Card.Title className="text-left card-title" >Stroy Title</Card.Title>
                  </Col>
                  <Col xs={12}>
                    <div className="text-left story-author ml-2" >Shaker Lashuel</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Card.Text className="text-justify mx-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Card.Text>
          <SocialFollow />
        </Card.Body> 
      </Card>  
    </div>
  );
}

export default Story_Card;
