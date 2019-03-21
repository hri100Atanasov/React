﻿import React, { Component } from 'react'
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory!!!</h2>
                {Object.keys(this.props.fishes).map(key => <EditFishForm fish={this.props.fishes[key]}
                    key={key}
                    updateFish={this.props.updateFish}
                    deleteFish={this.props.deleteFish}
                    index={key} />)}
                <AddFishForm addFish={this.props.addFish} />
                <button type="submit" onClick={this.props.loadSampleFishes}>Load fishes</button>
            </div>
        )
    }
}

export default Inventory
