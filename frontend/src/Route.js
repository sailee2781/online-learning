import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import SignUp from "./Signup";
import Login from "./Login"
import Main from "./Main"
import Header from './Header'
import Home from './Home'
export default function Routes() {
    return (
      <Router>
        <div>
          <div style = {{textAlign : "center" , backgroundColor : "#E7F37B"}}>
          <br></br>
          <h1 >ONLINE LEARNING PLATFORM</h1>
          <br></br>
          </div>
           <Main></Main>
           
          <Switch>
  
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <SignUp />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <div>
        <footer>
    <h1>Happy Learning</h1>
  </footer>
        </div>
      </Router>
    
    );
  }
  
  
  