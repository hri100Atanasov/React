import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Store from './components/Store';
import StorePicker from './components/StorePicker';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={StorePicker} />
                <Route path='/store/:storeId' component={Store} />
            </Layout>
        );
    }
}
