import React, { Component } from 'react'
import { formatPrice } from '../helpers'

class Fish extends Component {
    render() {
        const { image, name, desc, status, price } = this.props.details
        const isAvailable = status === 'available'
        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h2 className="fish-name">
                    {name}
                </h2>
                <span className="price">{formatPrice(price)}</span>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>{isAvailable ? 'Add to Cart' : 'Sold out'}</button>
            </li>
        )
    }
}

export default Fish