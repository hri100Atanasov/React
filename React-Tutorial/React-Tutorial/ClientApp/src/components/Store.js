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

    updateFish = (key, updateFish) => {
        //1. Take a copy of the current state
        const fishes = { ...this.state.fishes }
        //2. Update that state
        fishes[key] = updateFish
        //3. Set that to state
        this.setState({ fishes: fishes })
        //or
        //this.setState({fishes})
    }

    deleteFish = (key) => {
        //1. Take a copy of state
        const fishes = { ...this.state.fishes }
        //2. Update the object
        delete fishes[key]
        //3. Update the state
        this.setState({ fishes })
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

    removeFromOrder = key => {
        //1. Take a copy of the state
        const order = { ...this.state.order }
        //2. Remove selected item from order
        delete order[key]
        //3. Update the state
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
                <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder} />
                <Inventory addFish={this.addFish}
                    updateFish={this.updateFish}
                    deleteFish={this.deleteFish}
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes} />
            </div>
        )
    }
}

export default Store