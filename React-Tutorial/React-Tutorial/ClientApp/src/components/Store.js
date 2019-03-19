import React, { Component } from 'react'
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import fishes from '../sample/fishes';
import Fish from './Fish';

class Store extends Component {
    state = {
        fishes: {},
        order: {}
    }

    addFish = fish => {
        //1. Take a copy of the existing state.
        const fishes = { ...this.state.fishes }
        //2. Add the new fish to the fishes variable
        fishes[`fish${Date.now()}`] = fish
        //3. Set the new fishes object to state
        this.setState({ fishes })
        //this expression is equivalent
        //this.setState({fishes})
    }

    loadSampleFishes = () => {
        this.setState({ fishes: fishes })
    }

    addToOrder = (key) => {
        //1. Take a copy of the state
        const order = { ...this.state.order }
        //2. Either add to the order or update the number in the current order
        order[key] = order[key] + 1 || 1
        //3. Update state object
        this.setState({ order })
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} index={key} />)}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        )
    }
}

export default Store