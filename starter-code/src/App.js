import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Beers from './components/Beers';
import RandomBeers from './components/RandomBeers';
import NewBeer from './components/NewBeer';
import Home from './components/Home';
import Beer from './components/Beer';

let baseUrl = "https://ih-beers-api2.herokuapp.com/beers";
let allBeersEndpoint = "/";

class App extends Component {

  state = {
    dataReady: false,
  };

  componentDidMount = () => {
    this.getAllBeers();
  };

  getAllBeers = () => {
    axios.get(baseUrl + allBeersEndpoint)
    .then(response => {
        console.log(response)
        this.setState({
            beers: response.data, // save the array of data instead of the whole resposne object
            dataReady: true
        })
    })
    .catch(err => {
        console.log(err)
    })
}


  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} />}></Route>
          <Route exact path='/beers' render={(props) => <Beers {...props} beers={this.state.beers} dataReady={this.state.dataReady}/>}></Route>
          <Route exact path='/random-beers' render={(props) => <RandomBeers {...props} />}></Route>
          <Route exact path='/new-beer' render={(props) => <NewBeer {...props} />}></Route>
          <Route exact path='/beers/:beerID' render={(props) => <Beer {...props} />} beers={this.state.beers}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
