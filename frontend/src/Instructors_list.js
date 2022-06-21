import React from 'react';
import { Button, Breadcrumb, Card, Form, CardGroup, CardDeck, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import instructor from '../src/images/instructors.jpg'
import Comp from './Comp';
export default class Instructors_list extends React.Component {
  state = {
    Instructors: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8090/Instructors`)
      .then(res => {
        const Instructors = res.data;
        this.setState({ Instructors });
      })
  }

  render() {
    return (
      <div style={{ backgroundColor: "#8FFAE8", textAlign: "center", font: "icon" }}>
        <br></br>
        <button type="submit" className="btn btn-dark" size='lg' style={{ position: 'absolute', right: 5, top: 90, }}>
          <a href="/"> Log out</a>
        </button>
        <Comp></Comp>
        <br></br>
        <br></br>
        <h1>INSTRUCTORS ON THE PLATFORM..!</h1>
        <br></br>
        <h5>MEET OUR PROFESSIONAL TRAINERS..!</h5>
        <br></br>

        <img src={instructor} height="450px" width="90%" />

        <Container>
          <Row>
            {this.state.Instructors.map(Instructor => {
              let image = Instructor.Image
              return (
                <Col>
                  <br></br>
                  <br></br>
                  <Card style={{ width: '18rem', backgroundColor: '#E9989A' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>

                      <Card.Title>{Instructor.Instructor_name}</Card.Title>
                      <Card.Text>
                        {Instructor.Email}
                        <p>{Instructor.Phone}</p>
                        <p>{Instructor.Review}</p>
                      </Card.Text>

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