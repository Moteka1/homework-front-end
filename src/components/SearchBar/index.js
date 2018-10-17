import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  // instead of constructor and super(props)
  state = {
    searchTerm: ''
  };

  // use arrow function instead of bind to give "this" the correct context
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  // handle submitting the search bar form
  // send term to parent (Homepage.js) in order to make API call
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.search(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  };

  render() {
    return (
      <div className="searchbar-container">
        <div className="searchbar-content">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="search">
              <input
                onChange={this.handleChange}
                type="text"
                id="search"
                name="searchTerm"
                className="searchTerm"
                value={this.state.searchTerm}
                placeholder="Search for Gif"
              />
            </label>
            <input type="submit" value="Search" className="searchbar-button" />
          </form>
        </div>
      </div>
    );
  }
  // need to have a button and a search input/form
  // this value will
}
