import React, { Component } from 'react';
import modal from 'react-responsive-modal';
import GifModal from '../GifModal';
import './gifcard.css';

// card should include image info should be passed in as props from parent

export default class GifCard extends Component {
  // open and close modal
  state = {
    open: false
  };
  // functions to open and close modal
  openModal = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { gifSrc, gifAlt } = this.props;
    return (
      // need a way to open and close modal
      <div className="gifcard-container" onClick={this.openModal}>
        <img src={gifSrc} alt={gifAlt} />
        {/* conditionally rendering components */}
        {this.state.open && <GifModal closeModal={this.closeModal} />}
      </div>
    );
  }
}
