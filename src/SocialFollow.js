import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest, FaHeart, FaUsers } from "react-icons/fa";
import { Container, Row, Col, Card} from 'react-bootstrap';

import './SocialFollow.css';

function SocialFollow() {
    return (
     
      <div >  
          <Container style={{width: '24rem'}}>
                <Row className="justify-content-center mr-3">
                    <Col xs={5} >
                        <FaHeart color="red" size="1.2em"/> <span className={"mr-2"}>137</span>
                        <FaUsers color="#0e76a8" size="1.2em"/> <span>137</span>
                    </Col>

                    <Col xs={{span:6, offset:1}}>
                        <span className={"mr-2"}><FaPinterest color="red" size="1.2em"/></span>
                        <span className={"mr-2"}><FaTwitter color="#00acee" size="1.2em"/></span>
                        <span className={"mr-2"}><FaFacebook color="#3b5998" size="1.2em"/></span>
                        <span className={"mr-2"}><FaInstagram color="#fb3958" size="1.2em"/></span>
                        <span><FaLinkedin color="#0e76a8" size="1.2em"/></span>
                    </Col>
                </Row>
           </Container>
      </div>
        

    );
  }


export default SocialFollow;