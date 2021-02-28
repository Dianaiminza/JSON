import React, { Component } from 'react'
import{Switch,Route,}from 'react-router-dom';

import Home from '../pages/Home';
export default class Layout extends Component {
  render() {
    return (
      <div>

      <Switch>
          <Route exact path="/home" component={Home} />
          </Switch>
      </div>
    )
  }
}

