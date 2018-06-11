import React from 'react';
import renderer from 'react-test-renderer';
import Display from './Display';
import store from './store';

it('matches snapshots', () => {
  const component = renderer.create(<Display store={store} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
