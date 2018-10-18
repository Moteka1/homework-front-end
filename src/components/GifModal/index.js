import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

GifModal.propTypes = {
  closeModal: PropTypes.func.isRequired
};
