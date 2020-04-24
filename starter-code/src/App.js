import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Beers from './components/Beers';
import RandomBeers from './components/RandomBeers';
import NewBeer from './components/NewBeer';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} />}></Route>
          <Route exact path='/beers' render={(props) => <Beers {...props} />}></Route>
          <Route exact path='/random-beers' render={(props) => <RandomBeers {...props} />}></Route>
          <Route exact path='/new-beer' render={(props) => <NewBeer {...props} />}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
