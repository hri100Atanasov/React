import React, { Component } from 'react'
import '../scss/StyleSheet.css'
class StorePicker extends Component {
    goToStore(event) {
        event.preventDefault()
        console.log('Going to store')
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store 🢂</button>
            </form>
        )
    }
}

export default StorePicker