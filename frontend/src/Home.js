import React from 'react';
import { Button, Breadcrumb, Card, Form, CardGroup, CardDeck, Container, Row, Col } from 'react-bootstrap';
import home from '../src/images/Learning languages.gif'
import axios from 'axios';
import Hom from "./Hom"
export default class Whatweoffer extends React.Component {

  render() {
    return (

      <div style={{ backgroundColor: 'lightgrey', textAlign: "center" ,font : "icon" }}>
        <br></br>
        <h1>ONLINE EDUCATION </h1>
        <br></br>
        <h3>Learn Online From Home...!</h3>
        <br></br>

        <img src={home} height='550px' width='100%' />

        
      </div>
    )
  }
}