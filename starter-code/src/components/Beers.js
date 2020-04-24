import React, { Component } from 'react';
import NavBar from './NavBar';
import axios from 'axios';


let baseUrl = "http://ih-beers-api.herokuapp.com/beers" // these variables need to be set above the class, or you'll get undefined when you go to call 'getAllBeers()' !!!
let allBeersEndpoint = '/'


class Beers extends Component {

   state = {
       beers: [],
       dataReady: false
   }

   componentDidMount = () => {
       this.getAllBeers(); // could also have just put the getAllBeers method code directly in here, too.
   }
    
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

    showBeers = () => {
        return this.state.beers.map(eachBeer => {
            return (
                <div>{eachBeer.name}</div>
            )
        })
    }
        
    render() {
        return (
            <div>
                <NavBar />
                <h1>All Beers!</h1>
                
                {this.state.dataReady?(this.showBeers()): ("Loading...")}
            </div>
        );
    }
}

export default Beers;