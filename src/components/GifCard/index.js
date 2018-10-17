import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
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

  onCloseModal = e => {
    e.stopPropagation();
    this.setState({ open: false });
  };

  render() {
    const { gifSrc, gifAlt, title, username, rating, giphyUrl } = this.props;
    const { open } = this.state;
    return (
      // need a way to open and close modal
      <div className="gifcard-container" onClick={this.openModal}>
        <img src={gifSrc} alt={gifAlt} />
        {/* conditionally rendering components */}
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2 className="modal-title">{title}</h2>
          <div>
            Username: {username}
            <br />
            Rating: {rating}
            <br />
            Giphy Link: {giphyUrl}
          </div>
        </Modal>
        {/* {this.state.open && <GifModal closeModal={this.closeModal} />} */}
      </div>
    );
  }
}
