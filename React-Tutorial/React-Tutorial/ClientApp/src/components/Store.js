import React, { Component } from 'react'
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class Store extends Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Iko cool" age={200} />
                </div>
                <Order />
                <Inventory />
            </div>
        )
    }
}

export default Store