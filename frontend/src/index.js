import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Formex from './Formex'
import New_component from './New_component'
import Prop from './Prop'
import NameForm from './NameForm'
import CourseList from './CourseList'
import ML_courses from './ML_courses'
import Whatweoffer from './Whatweoffer'
import Instructors_list from './Instructors_list'
import Multiple from './Multiple'
import Contact from './Contact'
import Landing from './Landing'
import Login from './Login'
import SignUp from './Signup'
import Route from './Route'
import Home from './Home'
import Routes from './Routes'


import ForLoop from './ForLoop'
import reportWebVitals from './reportWebVitals';
import { Form } from 'react-router';
import Student from './Student';
import Success from './Success';
import Failure from './Failure';

ReactDOM.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
