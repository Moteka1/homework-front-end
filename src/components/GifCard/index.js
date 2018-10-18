import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
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
          <img src={gifSrc} alt={gifAlt} />
          <div>
            <strong>Username:</strong> {username}
            <br />
            <strong>Rating:</strong> {rating}
            <br />
            <strong>Giphy Link:</strong>{' '}
            <a href={`${giphyUrl}`}>Link to the actual giphy!</a>
          </div>
        </Modal>
      </div>
    );
  }
}
GifCard.propTypes = {
  gifSrc: PropTypes.string,
  gifAlt: PropTypes.string,
  title: PropTypes.string,
  username: PropTypes.string,
  rating: PropTypes.string,
  giphyUrl: PropTypes.string
  // test: PropTypes.object.isRequired
};
