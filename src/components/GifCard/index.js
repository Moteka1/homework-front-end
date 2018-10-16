import React, { Component } from 'react';
import './gifcard.css';

// card should include image info should be passed in as props from parent

export default class GifCard extends Component {
  render() {
    const { gifSrc, gifAlt } = this.props;
    return (
      // need a way to open and close modal
      <div className="gifcard-container" onClick={this.openModal}>
        <img src={gifSrc} alt={gifAlt} />
      </div>
    );
  }
}
