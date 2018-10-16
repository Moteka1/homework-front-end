import React, { Component } from 'react';
import GifCard from '../GifCard';

// might contain GifCard pass down info as props
export default class GifArea extends Component {
  render() {
    return (
      <div className="gifarea-container">
        <GifCard />
      </div>
    );
  }
}
