import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import CourseList from "./CourseList";
import Instructors_list from "./Instructors_list";
import ML_courses from "./ML_courses";
import Whatweoffer from "./Whatweoffer";
import Student from "./Student"
import Formex from "./Formex"
import Landing from "./Landing"
export default function Success(){
  return (

    <div>
    <Navbar bg="dark" variant="dark" text="White" expand="lg" >

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home Page</Nav.Link>
          <Nav.Link href="/success/courselist">Course List</Nav.Link>
          <Nav.Link href="/success/mlcourses">Other Domain Courses</Nav.Link>
          <Nav.Link href="/success/instructors">Instructors</Nav.Link>
          <Nav.Link href="/success/offer">Facilities Provided</Nav.Link>
          <Nav.Link href="/success/review">Students Review</Nav.Link>
          <Nav.Link href="/success/contact">Contact Us</Nav.Link>
          
        </Nav>

      </Navbar.Collapse>
    </Navbar>
    <Router>
    <Switch>
          <Route path="/success/mlcourses">
            <ML_courses />
          </Route>
          <Route path="/success/instructors">
            <Instructors_list />
          </Route>
          <Route path="/success/courselist">
            <CourseList />
          </Route>
          <Route path="/success/offer">
            <Whatweoffer />
          </Route>
          <Route path="/success/review">
            <Student />
          </Route>
          <Route path="/success/contact">
            <Formex />
          </Route>
          <Route path="/">  
            <Landing />
          </Route>
        </Switch>
    </Router>
    </div>
  );

}
