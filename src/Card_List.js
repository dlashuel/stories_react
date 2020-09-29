import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card} from 'react-bootstrap';
import Story_Card  from "./Story_Card.js";




function Card_List({data}) {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
  
  export default Card_List;


