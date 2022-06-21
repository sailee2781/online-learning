import React from 'react';
import { Button, Breadcrumb, Card, Form, CardGroup, CardDeck, Container, Row, Col } from 'react-bootstrap';
import off from '../src/images/offer.jpg'
import axios from 'axios';
import Comp from './Comp';

export default class Whatweoffer extends React.Component {
  state = {
    offers: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8090/What_we_offer`)
      .then(res => {
        const offers = res.data;
        this.setState({ offers });
      })
  }

  render() {
    return (

      <div style={{ backgroundColor: 'lightblue', textAlign: "center" }}>
        <br></br>
        <button type="submit" className="btn btn-dark" size='lg' style={{ position: 'absolute', right: 5, top: 90, }}>
          <a href="/"> Log out</a>
        </button>
        <Comp></Comp>
        <br></br>
        <br></br>
        <h1>WHAT WE OFFER ????</h1>
        <br></br>
        <h5>FACILITIES PROVIDED OVER THE PLATFORM</h5>
        <br></br>

        <img src={off} height='450px' width='100%' />

        <Container>
          <Row>
            {this.state.offers.map(offer => {
              let image = offer.Image
              return (
                <Col>
                <br></br>
                  <Card style={{ width: '18rem', backgroundColor: '#F6F09F' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                      <br></br>
                      <Card.Title>{offer.Facility}</Card.Title>
                      <br></br>
                      <Card.Text>
                        {offer.Description}
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