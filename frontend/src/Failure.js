import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Login from "./Login"
import SignUp from "./Signup";
import Landing from "./Landing"
import Home from "./Home"
export default function Failure() {
  return (
    <div>
    <Navbar bg="dark" variant="dark" text="White" expand="lg" >
      <br></br>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">    
                <Nav.Link href="/">Home Page</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
                <br></br>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Router>
    <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/">  
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}
