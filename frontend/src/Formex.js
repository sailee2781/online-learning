import React from 'react';
import { Button, Breadcrumb, Card, Form, FormGroup, CardGroup, CardDeck, Container, Row, Col } from 'react-bootstrap';
import get from '../src/images/get.jpg'
import axios from 'axios';
import Comp from './Comp';

export default class Formex extends React.Component {
  state = {
    Name: '',
    Email: '',
    Msg: '',
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      Name: this.state.Name,
      Email: this.state.Email,
      Msg: this.state.Msg,
    };
    console.log(user)


    axios.post(`http://localhost:8090/contact`, user )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

  }

  render() {
    const { Name, Email, Msg } = this.state
    return (
      <div style={{ textAlign: "center", font: "inherit", justifyContent: 'center', alignItems: "center" }}>
        <br></br>
        <button type="submit" className="btn btn-dark" size='lg' style={{ position: 'absolute', right: 5, top: 90, }}>
          <a href="/failure"> Log out</a>
        </button>
        <Comp></Comp>
        <br></br>
        <br></br>
        <h1>GET IN TOUCH WITH US..!</h1>
        <br></br>
        <img src={get} height="450px" width="100%" />
        <div class="container" style={{
          textAlign: "center", font: "inherit", display: "flex", justifyContent: 'center', alignItems: "center",
          width: '350px',
          border: '15px solid black',
          padding: '50px',
          margin: '30px auto',
          backgroundColor: 'white',

        }
        } >
          <div class="row">
            <div class="col-sm-8">
              <p>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup controlId="formBasicName">
                    <label style={{ width: "100%" }}>
                      Full Name
                    <br></br>
                      <input type="text" value={Name} name="Name" placeholder="Enter Your Name " onChange={this.handleChange} />
                    </label>
                    <br></br>

                  </FormGroup>
                  <FormGroup>
                    <label>
                      E-mail address
                    <br></br>
                      <input type="email" value={Email} name="Email" placeholder="Enter the Email " onChange={this.handleChange} />
                    </label>
                    <br></br>
                  </FormGroup>
                  <FormGroup>
                    <label>
                      Message
                    <br></br>
                      <input type="message" value={Msg} name="Msg" placeholder="Enter the Message" onChange={this.handleChange} />
                    </label>
                  </FormGroup>
                  <br></br>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <button
                    type="submit"
                    className="btn btn-primary">
                    Submit
                    </button>
                  <br></br>
                </Form>
              </p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}