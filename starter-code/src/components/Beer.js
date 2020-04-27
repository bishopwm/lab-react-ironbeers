import React, { Component } from 'react';

class Beer extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                Single Beer
            </div>
        );
    }
}

export default Beer;