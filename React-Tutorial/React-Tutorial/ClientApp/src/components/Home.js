import React, { Component } from 'react';
import StorePicker from './StorePicker';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <StorePicker />
      </div>
    );
  }
}
