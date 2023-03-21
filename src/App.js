import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Carrinho from './components/Carrinho';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/carrinho" component={ Carrinho } />
          <Route exact path="/card/:id" render={ (props) => <Card { ...props } /> } />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
