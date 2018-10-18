import React from 'react';
import Homepage from './index.js';
import renderer from 'react-test-renderer';

describe('<Homepage />', () => {
  it('matches the snapshot', () => {
    var tree = renderer.create(<Homepage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
