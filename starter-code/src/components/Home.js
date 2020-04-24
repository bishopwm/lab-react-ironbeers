import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="home">
                    <div className="home-all-beers">
                        <Link className="home-links" to="./beers">
                            
                            <h2>All Beers</h2>
                            <img src="/images/beers.png" alt="beer" />
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            lacinia eleifend ornare. Etiam eget dui egestas, sodales magna id,
                            eleifend nisi. Proin sit amet tortor.
                            </p>
                        </Link>
                    </div>
                    <div className="random-beer">
                        <Link className="home-links" to="./random-beers">
                        
                        <h2>Random Beer</h2>
                        <img src="/images/random-beer.png" alt="beer" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            lacinia eleifend ornare. Etiam eget dui egestas, sodales magna id,
                            eleifend nisi. Proin sit amet tortor.
                        </p>
                        </Link>
                    </div>
                    <div className="new-beer">
                        <Link className="home-links" to="./new-beer">
                            
                            <h2>New Beer</h2>
                            <img src="/images/new-beer.png" alt="beer" />
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            lacinia eleifend ornare. Etiam eget dui egestas, sodales magna id,
                            eleifend nisi. Proin sit amet tortor.
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;