import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class New_component extends Component {

   constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.gotoLogin = this.gotoLogin.bind(this);
    this.gotoRegister = this.gotoRegister.bind(this);

  }

  gotoLogin() {


    alert("Login");
  }

   gotoRegister() {

      alert("Register");

  }
  render() {
    return (
      <div className="New_component">
       
        <button  onClick={this.gotoLogin} class="Button ">Login</button>
        <button  onClick ={this.gotoRegister} class="Button">Register</button>
      </div>
    );
  }
}

export default New_component;