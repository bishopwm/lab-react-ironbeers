import React, { Component } from 'react';
import NavBar from './NavBar';

import './Beers.css'
import { Link } from 'react-router-dom';

// let baseUrl = "http://ih-beers-api.herokuapp.com/beers" // these variables need to be set above the class, or you'll get undefined when you go to call 'getAllBeers()' !!!
// let allBeersEndpoint = '/'


class Beers extends Component {

    state = {
        query: "",
        beers: [],
      };

      showBeers = () => {
        let beers = this.props.beers ? this.props.beers : this.props.beers;
        return beers.map((eachBeer) => {
          return (
            <div key={eachBeer._id}>
              <img src={eachBeer.image_url} />
              <h3>{eachBeer.name}</h3>
              <h6>
                <Link to={`/beers/${eachBeer._id}`}>{eachBeer.tagline}</Link>
              </h6>
              <p>Contributed by: {eachBeer.contributed_by}</p>
            </div>
          );
        });
      };
        
    render() {
        return (
            <div>
                <NavBar />
                <h1>All Beers!</h1>
                
                {this.props.dataReady ? this.showBeers() : "Loading..."}
            </div>
        );
    }
}

export default Beers;