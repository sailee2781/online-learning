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
          
            
                <Nav.Link href="/">Home Page</Nav.Link>
                <Nav.Link href="/courselist">Course List</Nav.Link>
                <Nav.Link href="/mlcourses">Other Domain Courses</Nav.Link>
                <Nav.Link href="/instructors">Instructors</Nav.Link>
                <Nav.Link href="/offer">Facilities Provided</Nav.Link>
                <Nav.Link href="/review">Students Review</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
            
                <Nav.Link href="/">Home Page</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>

  );
}
