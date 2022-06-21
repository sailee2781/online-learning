import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import CardDetails from "./CardDetails";
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
          <Route path="/card-details">
            <CardDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

