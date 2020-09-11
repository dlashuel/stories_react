import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, ContainerFluid, Row, Col, Card, Jumbotron, Button, ModalFooter} from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest, FaHeart, FaUsers, FaAppStore, FaAndroid } from "react-icons/fa";
import './Footer.css';

function Footer() {
    return (
     
      <div>  
            <Container fluid={true} className='mx-5 my-4'>
                <Row>
                    <Col>
                      <h5 className='text-left'>Read - Share - Inspire</h5>
                      <p className='text-left'>Tell your story, share your experience, and inspire others.Tell your story, share your experience, and inspire others. Tell your story, share your experience, and inspire others.</p>
                    </Col>

                    <Col>
                      <div className='text-left'>
                      <h5 >Become a Storyteller</h5>
                      <p>Tell your story, share your experience, and inspire others. Tell your story, share your experience, and inspire others.</p>
                      </div>
                    </Col>

                    <Col>
                      <div className='text-left mt-1'>
                        <h5 >Download the App</h5>
                        <button type="button" className="btn btn-secondary mr-4"><FaAppStore className='mr-2' color="white" size="1.6em"/>AppStore</button>
                        <button type="button" className="btn btn-secondary"><FaAndroid className='mr-2' color="white" size="1.6em"/>Android</button>
                      </div>
                      
                      <div className='text-left mt-3'>
                        <span className={"mr-2"}><FaPinterest color="red" size="1.6em"/></span>
                        <span className={"mr-2"}><FaTwitter color="#00acee" size="1.6em"/></span>
                        <span className={"mr-2"}><FaFacebook color="#3b5998" size="1.6em"/></span>
                        <span className={"mr-2"}><FaInstagram color="#fb3958" size="1.6em"/></span>
                        <span><FaLinkedin color="#0e76a8" size="1.6em"/></span>
                      </div>  
                    </Col>
                </Row>
            </Container>
            <hr className='copy-right-hr'/>
            <div className=" text-center py-3 copy-right">© 2020 Copyright:
              <a className='' href="#">Lashuel Design</a>
            </div>
      </div>
        

    );
  }

export default Footer;