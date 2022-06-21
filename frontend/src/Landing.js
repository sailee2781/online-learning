import React from 'react';
import { Button, Breadcrumb, Card, Form, CardGroup, CardDeck, Container, Row, Col } from 'react-bootstrap';
import landing from '../src/images/Landing.gif'
import axios from 'axios';
export default function Landing() {
    return (
        <div style={{ backgroundColor: "#EC51D7", textAlign: "center", font: "initial" }}>
            <br></br>
            <h1 >WELCOME TO ONLINE LEARNING PLATFORM</h1>
            <br></br>
            <h2>Learn Online From Home</h2>
            <button type="submit" className="btn btn-dark" size='lg' style={{ position: 'absolute', right: 5, top: 90, }}>
                <a href="/"> Log out</a>
            </button>
            <br></br>
            <img src={landing} height="550px" width="100%" />
        </div>
    );
}
