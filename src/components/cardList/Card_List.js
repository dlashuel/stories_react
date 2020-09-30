import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card} from 'react-bootstrap';
import Story_Card  from "../storyCard/Story_Card.js";




function Card_List({data}) {
    return (
      <React.Fragment>
          <Container fluid={true}>
            <Row>
                {data.map((data,key)=>{
                    return(
                        <Col xs={12} md={6} lg={4}>
                            <Story_Card 
                                key={key}
                                name={data.name}
                                image={data.image}
                                story={data.story}
                            />
                        </Col>
                    );
                })}
            </Row>
          </Container>
      </React.Fragment>
    );
  }
  
  export default Card_List;


