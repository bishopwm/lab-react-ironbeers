import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Beers from './components/Beers';
import RandomBeers from './components/RandomBeers';
import NewBeer from './components/NewBeer';

class App extends Component {
  render() {
    return (
      <div>
        Hello World -- HOME
        <NavBar />
        <Beers />
        <RandomBeers />
        <NewBeer />
        <Switch>
          <Route exact path='/beers' component={(props) => <Beers {...props} />}></Route>
          <Route exact path='/random-beers' component={(props) => <RandomBeers {...props} />}></Route>
          <Route exact path='/new-beer' component={(props) => <NewBeer {...props} />}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
