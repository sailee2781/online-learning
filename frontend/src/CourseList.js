import React from 'react';
import { Button, Breadcrumb, Card, Form, CardGroup, CardDeck, Container, Row, Col } from 'react-bootstrap';
import course from '../src/images/course.jpg'
import axios from 'axios';
import Comp from './Comp';
import certificate from '../src/images/certificate.jpg'
import Certificate from './Certificate'
export default class CourseList extends React.Component {
  state = {
    courses: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8090/programming_courses`)
      .then(res => {
        const courses = res.data;
        this.setState({ courses });
      })
  }

  render() {
    return (
      <div style={{ backgroundColor: "lightblue", textAlign: "center", font: "icon" }} >
        <br></br>
        <button type="submit" className="btn btn-dark" size='lg' style={{ position: 'absolute', right: 5, top: 90, }}>
          <a href="/"> Log out</a>
        </button>
        <Comp></Comp>

        <br></br>
        <br></br>
        <h1>OUR LATEST COURSES</h1>
        <br></br>
        <h5>COURSES AVAILABLE IN PROGRAMMING DOMAIN...!</h5>
        <br></br>

        <img src={course} height="500px" width="100%" />

        <Container>

          <Row>
            {this.state.courses.map(course => {
              let image = course.Image
              let link = course.Link
              let cerificate = course.Certificate
              console.log(image)
              return (
                <Col>
                  <br></br>
                  <br></br>
                  <Card style={{ width: '18rem', backgroundColor: 'pink' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                      <Card.Title>{course.Name}</Card.Title>
                      <Card.Text>
                        {course.Description}
                        <br></br>
                        <br></br>

                      </Card.Text>
                      <button className="btn btn-dark">
                        <a>
                          <Card.Link href={link} >
                            Go to the Course
                          </Card.Link>
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