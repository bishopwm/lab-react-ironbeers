import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <ul className="nav">
                        <li className="nav-link">
                            <Link to='/'>Home</Link>
                        </li>
                        {/* <li className="nav-link">
                            <Link to='/beers'>All Beers</Link>
                        </li>
                        <li className="nav-link">
                            <Link to='/random-beers'>Random Beers</Link>
                        </li>
                        <li className="nav-link">
                            <Link to='/new-beer'>New Beer</Link>
                        </li> */}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;