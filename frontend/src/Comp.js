import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import axios from 'axios';
export default function Header() {
  return (

    <Navbar bg="dark" variant="dark" text="White" expand="lg" >

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          
            
                <Nav.Link href="/success/">Home Page</Nav.Link>
                <Nav.Link href="/success/courselist">Course List</Nav.Link>
                <Nav.Link href="/success/mlcourses">Other Domain Courses</Nav.Link>
                <Nav.Link href="/success/instructors">Instructors</Nav.Link>
                <Nav.Link href="/success/offer">Facilities Provided</Nav.Link>
                <Nav.Link href="/success/review">Students Review</Nav.Link>
                <Nav.Link href="/success/contact">Contact Us</Nav.Link>
            
        </Nav>

      </Navbar.Collapse>
    </Navbar>

  );
}
