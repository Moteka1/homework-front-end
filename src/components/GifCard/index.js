import React, { Component } from 'react';

// card should include image info should be passed in as props from parent

export default class GifCard extends Component {
  render() {
    const { gifSrc, gifAlt } = this.props;
    return (
      <div className="gifcard-container">
        <img src={gifSrc} alt={gifAlt} />
      </div>
    );
  }
}
