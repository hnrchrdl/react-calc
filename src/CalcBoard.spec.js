import React from 'react';
import renderer from 'react-test-renderer';
import CalcBoard from './CalcBoard';
import store from './store';
import { Provider } from 'react-redux';

it('matches snapshots without props', () => {
  const component = renderer.create(
    <Provider store={store}>
      <CalcBoard />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
it('matches snapshots with results', () => {
  // render results
  const component = renderer.create(
    <Provider store={store}>
      <CalcBoard results={'1.1111'} steps={['1', '+', '0.1111']} />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
// render steps
it('matches snapshots with results', () => {
  const component = renderer.create(
    <Provider store={store}>
      <CalcBoard results={null} steps={['1', '+', '0.1111']} />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
