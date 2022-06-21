import React from 'react';
import { Button, Breadcrumb, Card, Form, CardGroup, CardDeck, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import certificate from '../src/images/certificate.jpg'
export default function Certificate() {
    return (
        <div style={{ backgroundColor: "#EC51D7", textAlign: "center", font: "initial" }}>
            <br></br>
            <h1 >Get the Certificate</h1>
            <br></br>
            
            <img src={certificate} height="550px" width="100%" />
        </div>
    );
}
