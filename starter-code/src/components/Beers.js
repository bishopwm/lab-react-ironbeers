import React, { Component } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import './Beers.css'
import { Link } from 'react-router-dom';

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
                <div className="col-4">
                    <Link to={`/beers/${eachBeer._id}`}>{eachBeer.tagline}</Link>
                    <ul className="list-group all-beers-list">
                        <li className="list-group-item all-beers-list-item" id="beer-name"> {eachBeer.name}</li>
                        <li className="list-group-item all-beers-list-item"><img src={eachBeer.image_url} alt="" style={{width: "50px"}}></img></li>
                        <li className="list-group-item all-beers-list-item">{eachBeer.name}</li>
                        <li className="list-group-item all-beers-list-item">{eachBeer.tagline}</li>
                  
                    </ul>
                </div>
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