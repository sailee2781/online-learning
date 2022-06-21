import React, { Component } from "react";
import { Button, Breadcrumb, Card, Form, FormGroup, CardGroup, CardDeck, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from "react-router-dom";
export default class Login extends Component {
  state = {
    Name: '',
    Email: '',
    Password: '',
    redirect: 'start',
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  renderRedirect = () => {
    if (this.state.redirect != 'start') {
      console.log('i m in render redirect')
      console.log(this.state.redirect)
      if (this.state.redirect == 'true') {
        return <Redirect to='/success' />
      }
      else {
        return <Redirect to='/failure' />
      }
    }

  }
  handleSubmit = event => {
    event.preventDefault();
    const stu = {
      Name: this.state.Name,
      Email: this.state.Email,
      Password: this.state.Password,
    };
    axios.post(`http://localhost:8090/authenticate`, { stu })
      .then(res => {
        /*console.log(res);
        console.log(res.data);*/
        if (res.data == 'Failure') {

          this.setState({
            redirect: 'false'
          })
          console.log('I m in failure condition')
        }
        else {
          this.setState({
            redirect: 'true'
          })
          console.log('I m in success condition')
        }
      })
    /*console.log(this.state.redirect)*/


  }

  render() {
    const { Name, Email, Password } = this.state
    return (
      <div style={{
        textAlign: "center", font: "inherit", display: "flex", justifyContent: 'center', alignItems: "center",
        width: '350px',
        border: '15px solid black',
        padding: '50px',
        margin: '30px auto',
        backgroundColor: 'white',

      }
      }>
        {this.renderRedirect()}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formBasicName">
            <nav class="navbar navbar-dark bg-primary">
              <div className="row col-12 d-flex justify-content-center text-white">
                <span className="h4">Login ..!</span>
              </div>
            </nav>
            <br></br>
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
            <label style={{ width: "100%" }}>
              Password
                    <br></br>
              <input type="password" value={Password} name="Password" placeholder="Enter the Password " onChange={this.handleChange} />
            </label>
            <br></br>
          </FormGroup>
          <br></br>
          <button
            type="submit"
            className="btn btn-primary">
            Login
          </button>
          <br></br>
          <p >
            Don't have account???
             <a href="/register">Register...!</a>
          </p>
          <br></br>
        </Form>
      </div >
   
    );
  }
}