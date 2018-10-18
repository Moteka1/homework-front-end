import React from 'react';
import SearchBar from './index.js';
import renderer from 'react-test-renderer';

describe('<SearchBar />', () => {
  it('matches the snapshot', () => {
    var tree = renderer.create(<SearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
