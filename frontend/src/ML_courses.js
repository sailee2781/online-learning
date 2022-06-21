import React from 'react';
import { Button, Breadcrumb, Card, Form, CardGroup, CardDeck, Container, Row, Col } from 'react-bootstrap';
import ml from '../src/images/ml.jpg'
import axios from 'axios';
import Comp from './Comp';
import certificate from '../src/images/certificate.jpg';
export default class ML_courses extends React.Component {
  state = {
    ml_courses: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8090/ml_courses`)
      .then(res => {
        const ml_courses = res.data;
        console.log(ml_courses)
        this.setState({ ml_courses });
      })
  }

  render() {
    return (
      <div style={{ backgroundColor: "#E688F0", textAlign: "center",font : "icon" }}>
         <button type="submit" className="btn btn-dark" size='lg' style={{ position: 'absolute', right: 5, top: 90, }}>
          <a href="/"> Log out</a>
        </button>
        <Comp></Comp>
        <br></br>
        <br></br>
        <h2>LEARN MACHINE LEARNING , DEEP LEARNING and ARTIFICIAL INTELLIGENCE....!</h2>
        <br></br>
        <h5>COURSES AVAILABLE</h5>
        <img src={ml} width = '100%' height = '450px'/>

        <Container>
          <Row>
            {this.state.ml_courses.map(ml_course => {
              let image = ml_course.Image
              let link = ml_course.Link
              return (
                
                <Col>
                <br></br>
                <br></br>
                  <Card style={{ width: '18rem', backgroundColor: '#F07B6D' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>

                      <Card.Title>{ml_course.Course}</Card.Title>
                      <Card.Text>
                        {ml_course.Description}
                      </Card.Text>
                      <button className="btn btn-dark">
                        <a>
                        <Card.Link href= {link} >  
                      Go to the Course</Card.Link>
                      </a>
                      </button>
                      <br></br>
                      <br></br>
                      <button className="btn btn-dark">
                        <a>
                          <br></br>
                          <Card.Link href='/success/certificate' >
                            Get the certificate
                          </Card.Link>
                          <br></br>
                          <br></br>
                          <Card.Img variant="top" src={certificate} />
                        </a>
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            }

            )}
          </Row>
        </Container>
      </div>
    )
  }
}