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
import Login from "./Login"
import SignUp from "./Signup";
import Success from "./Success";
import Failure from "./Failure";
import Certificate from "./Certificate";
export default function Routes() {
  return (
    <Router>
      <div>
        <div style={{ textAlign: "center", backgroundColor: 'lavender',font : 'initial' }}>
          <br></br>
          <h1 style = {{fontSize : '50px'}}>ONLINE LEARNING PLATFORM</h1>
          <br></br>
         
        </div>
        <br></br>
        
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
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
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/">
            <Failure />
          </Route>
          <Route path="/success/certificate">
            <Certificate />
          </Route>
          <Route path="/landing">  
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

