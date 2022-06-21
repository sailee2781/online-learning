import React from 'react';
import { Button, Breadcrumb, Card, Form, CardGroup, CardDeck, Container, Row, Col } from 'react-bootstrap';
import get from '../src/images/get.jpg'
import axios from 'axios';
export default function Contact() {
    return (
        <div style={{ backgroundColor: "lightgrey", textAlign: "center" }}>
          <br></br>
        <h1>GET IN TOUCH WITH US..!</h1>
        <br></br>
        <img src = {get} height = "450px" width = "100%"/>
       
        <div class="container" style={{  textAlign: "center" ,font : "inherit",justifyContent : 'center' , alignItems : "center"}}>
          <div class="row">
          <div class="col-sm-8">
            
            
            <p>
            <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="name" placeholder="Enter full name" />
              <Form.Text className="text-muted">
                Everything will be confidential.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className = "text-center" style = {{width : "100%"}}>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control type="Message" placeholder="Enter Message" />
              <Form.Text className="text-muted">
                Everything will be confidential.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
            </p>
          </div>
          
          </div>
        </div>
      </div>
    );
  }
  