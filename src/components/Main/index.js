import React, { Component } from 'react';
import Homepage from '../Homepage';

// I created a Main because I was thinking of adding routing to other pages
// such as a search page and more but did not have time
export default class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <Homepage />
      </div>
    );
  }
}
