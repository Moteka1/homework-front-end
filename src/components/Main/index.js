import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import Homepage from '../Homepage';

export default class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <Homepage />
      </div>
    );
  }
}
