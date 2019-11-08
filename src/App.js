import React, { Component } from 'react';
import Header from './Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Container/home';
import Contato from './Container/Contato';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path='/' component={Home}/>
        <Route exact path='/contato' component={Contato}/>
      </Router>
    );
  };
}