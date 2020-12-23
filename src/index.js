import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Messages from './Messages'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/messages" component={Messages} />
    </div>
  </Router>),
  document.getElementById('root')
);