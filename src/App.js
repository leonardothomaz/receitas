import React, { Component } from 'react';
import Header from './Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Container/home';
import Contato from './Container/Contato';
import Footer from './Footer';
import NovaReceita from './Container/NovaReceita';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/contato' component={Contato} />
        <Route exact path='/newReceita' component={NovaReceita} />
        <Footer />
      </Router>
    );
  };
}