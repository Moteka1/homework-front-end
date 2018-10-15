import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import axios from 'axios';
import GifArea from '../GifArea';

export default class Homepage extends Component {
  state = {
    gifResults: []
  };

  // search function takes in a term and return array of gif results
  searchGiphy = async searchTerm => {
    try {
      const limit = 3;
      const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
      const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=${limit}`;
      const response = await axios.get(url).then(res => {
        return res.data.data;
      });
      console.log(response[0].url);
      this.setState({
        ...this.state,
        gifResults: response
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    let gifs = this.state.gifResults.map(gif => (
      <img key={gif.id} src={gif.images.fixed_height.url} alt="#" />
    ));
    return (
      <div className="homepage-container">
        {/* Navbar */}
        {/* search bar */}
        <SearchBar search={this.searchGiphy} />
        {/* trending */}
        {/* home page/ area to fill, maybe route to a search page*/}
        <div>{gifs}</div>
        {/* <GifArea gifResults={this.state.gifResults} /> */}
        {/* each giphy is a card */}
      </div>
    );
  }
}
