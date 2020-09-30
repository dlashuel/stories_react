import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest, FaHeart, FaUsers } from "react-icons/fa";
import { Container, Row, Col, Card} from 'react-bootstrap';
import './Story_Card.css';
import SocialFollow from '../socialFollow/SocialFollow.js';



function Story_Card({name, image, story}) {
  console.log(image)
  return (
      <div className='mb-5'>
        <Card className='mx-auto'>
          <div className="clearfix ">
            <Card.Img  variant="top" src="https://mdbootstrap.com/img/Others/documentation/1.jpg" />
            <div className = "title-hlight"></div>
          </div>
          <Card.Body className="card-body" >
            <Container>
              <Row>
                <Col xs={3} >
                  <img className="author-image" src={image} />
                </Col>
                <Col className="row align-items-center">
                  <Row>
                    <Col xs={12}>
                      <Card.Title className="text-left card-title" >Story Title</Card.Title>
                    </Col>
                    <Col xs={12}>
                      <div className="text-left story-author ml-2" >{name}</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <Card.Text className="text-justify mx-3">
              {story}
            </Card.Text>
            <SocialFollow />
          </Card.Body> 
        </Card>  
      </div>
  );
}

export default Story_Card;
