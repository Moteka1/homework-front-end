import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import axios from 'axios';
import GifCard from '../GifCard';
import './homepage.css';

export default class Homepage extends Component {
  state = {
    gifResults: [],
    trendingGifs: [],
    searchLoad: true // will need to add for a loading placeholder later, did not get around to making a mosaic placeholder
  };

  // to have trending gifs need a component did mount to load API request once they are ready
  componentDidMount = async () => {
    this.trendingGiphy();
  };
  // search function takes in a term and return array of gif results
  searchGiphy = async searchTerm => {
    try {
      const limit = 25;
      const apiKey = 'KdpYtENdZIbVcvy4BGZEDKNameGAKyaw'; // process.env.REACT_APP_GIPHY_API_KEY;
      const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=${limit}`;
      const response = await axios.get(url).then(res => {
        return res.data.data; // array of objs, each obj contains gif info from the search
      });
      // update state in a way that does not mutate state
      this.setState({
        ...this.state,
        gifResults: response,
        searchLoad: false
      });
    } catch (error) {
      console.log(error);
    }
  };

  trendingGiphy = async () => {
    try {
      const url =
        'https://api.giphy.com/v1/gifs/trending?api_key=KdpYtENdZIbVcvy4BGZEDKNameGAKyaw';
      const response = await axios.get(url).then(res => {
        return res.data.data; // arr of objs of trending gifs
      });
      this.setState({
        ...this.state,
        trendingGifs: response
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    let foundGifs = this.state.gifResults.map(gif => (
      // might want gif.images.downsized.url for searched
      <GifCard
        gifSrc={gif.images.downsized.url}
        gifAlt={gif.title}
        key={gif.id}
        title={gif.title}
        username={gif.username}
        rating={gif.rating}
        giphyUrl={gif.url}
      />
    ));

    let trendingGifs = this.state.trendingGifs.map(gif => (
      <GifCard
        gifSrc={gif.images.fixed_height.url}
        gifAlt={gif.title}
        key={gif.id}
        title={gif.title}
        username={gif.username}
        rating={gif.rating}
        giphyUrl={gif.url}
      />
    ));

    return (
      <div className="homepage-container">
        <h1>FIND A GIF</h1>
        {/* search bar */}
        <SearchBar search={this.searchGiphy} />
        {/* trending */}
        <h3 className="homepage-trendin-header">Trending Gifs!</h3>
        <div className="homepage-trending">{trendingGifs}</div>
        {/* home page/ area to fill, maybe route to a search page*/}
        <h2>Gifs found will display below!</h2>
        {/* place holder images */}
        {/* if searched state is true display found Gifs */}
        {this.state.searchLoad && (
          <img
            src="http://icons-for-free.com/free-icons/png/512/283043.png"
            alt="placeholder"
            className="placeholder"
          />
        )}
        <div className="homepage-foundGifs">{foundGifs}</div>
        {/* each giphy is a card */}
      </div>
    );
  }
}
