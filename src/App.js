import React, { Component } from 'react';
import Header from './Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Container/home';
import Contato from './Container/Contato';
import Footer from './Footer';
import NovaReceita from './Container/NovaReceita';
import Doce from './Container/Receitas/doce/index';
import Salgada from './Container/Receitas/salgada/index';
import Visualizar from './Container/Receitas/VisualizarReceita/index';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route render={props => <Header {...props}/>} />
        <Route exact path='/' render={props => <Home {...props}/>} />
        <Route exact path='/contato' render={props => <Contato {...props}/>} />
        <Route exact path='/newReceita' render={props => <NovaReceita {...props}/>} />
        <Route exact path='/doce' render={props => <Doce {...props}/>} />
        <Route exact path='/salgada' render={props => <Salgada {...props}/>} />
        <Route exact path='/receita/:receitaId' render={props => <Visualizar {...props}/>}/>
        <Route render={props => <Footer {...props}/>} />
      </Router>
    );
  };
}