import React, { Component } from 'react';

export default class GifModal extends Component {
  render() {
    return (
      <div className="GifModal-modal">
        <div className="GifModal-content">
          <span className="close" onClick={this.props.closeModal}>
            &times;
          </span>
          testing modal
        </div>
      </div>
    );
  }
}
