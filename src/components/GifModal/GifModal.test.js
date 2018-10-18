import React from 'react';
import GifModal from './index.js';
import renderer from 'react-test-renderer';

describe('<GifModal />', () => {
  it('matches the snapshot', () => {
    var tree = renderer.create(<GifModal />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
