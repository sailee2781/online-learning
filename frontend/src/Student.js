import React from 'react';
import { Button, Breadcrumb, Card, Form, CardGroup, CardDeck, Container, Row, Col } from 'react-bootstrap';
import stu from '../src/images/stu.jpg'
import axios from 'axios';
import Comp from './Comp';
export default class Student extends React.Component {
    state = {
        students: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8090/students`)
            .then(res => {
                const students = res.data;
                console.log(students)
                this.setState({ students });
            })
    }

    render() {
        return (
            <div style={{ backgroundColor: "lightblue", textAlign: "center" }}>
                <br></br>
                <button type="submit" className="btn btn-dark" size='lg' style={{ position: 'absolute', right: 5, top: 90, }}>
                    <a href="/"> Log out</a>
                </button>
                <Comp></Comp>
                <br></br>
                <br></br>
                <h1>WHAT OUR STUDENTS SAY....!</h1>
                <br></br>
                <h4 >STUDENTS OPINION OVER THE PLATFORM</h4>
                <br></br>
                <img src={stu} height="450px" width="100%" />

                <Container>
                    <Row>
                        {this.state.students.map(student => {
                            let image = student.Image
                            return (

                                <Col>
                                    <br></br>
                                    <br></br>
                                    <Card style={{ width: '18rem', backgroundColor: 'pink' }}>
                                        <Card.Img variant="top" src={image} />
                                        <Card.Body>
                                            <Card.Title>{student.Student_Name}</Card.Title>
                                            <Card.Text>
                                                {student.E_Mail}
                                                <br></br>
                                                <br></br>
                                                {student.Opinion}
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