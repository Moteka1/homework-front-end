import React from 'react';
import GifCard from './index.js';
import renderer from 'react-test-renderer';

describe('<GifCard />', () => {
  it('matches the snapshot', () => {
    var tree = renderer.create(<GifCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
