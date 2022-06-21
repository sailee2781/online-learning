import React, { Component } from "react";
import { Button, Breadcrumb, Card, Form, FormGroup, CardGroup, CardDeck, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Login from './Login'
export default class SignUp extends Component {
    state = {
        Name: '',
        LName: '',
        Email: '',
        Password: '',
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const stu = {
            Name: this.state.Name,
            LName : this.state.LName,
            Email: this.state.Email,
            Password: this.state.Password,
        };
        axios.post(`http://localhost:8090/register`, { stu })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

    }
    render() {
        const { Name, LName, Email, Password } = this.state
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
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formBasicName">
                        <nav class="navbar navbar-dark bg-primary">
                            <div className="row col-12 d-flex justify-content-center text-white">
                                <span className="h3">Register..!</span>
                            </div>
                        </nav>
                        <br></br>
                        <label style={{ width: "100%" }}>
                            Full Name
                            <br></br>
                            <input type="text" value={Name} name="Name" placeholder="Enter Your Name " onChange={this.handleChange} />
                        </label>
                    </FormGroup>
                    <FormGroup>
                        <label>
                            E-mail address
                    <br></br>
                            <input type="email" value={Email} name="Email" placeholder="Enter Email " onChange={this.handleChange} />
                        </label>
                        <br></br>
                    </FormGroup>
                    <FormGroup>
                        <label style={{ width: "100%" }}>
                            Password
                    <br></br>
                            <input type="password" value={Password} name="Password" placeholder="Enter Password " onChange={this.handleChange} />
                        </label>
                        <br></br>
                    </FormGroup>
                    <br></br>
                    <button
                        type="submit"
                        className="btn btn-primary">
                        Register
                    </button>
                    <br></br>
                    <p >
                        Already Registered <a href="/login">Log in?</a>
                    </p>
                    <br></br>
                </Form>
            </div>
        );
    }
}