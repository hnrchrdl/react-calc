import React from 'react';
import Pad, { UnwrappedPad } from './Pad';
import store from './store';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

it('matches snapshot without props', () => {
  const component = renderer.create(<Pad store={store} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('matches snapshot with props', () => {
  const component = renderer.create(
    <Pad store={store} display={'test'} value={1} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('adds calculation steps', () => {
  const mockAddCalcStep = jest.fn();
  const mockUndo = jest.fn();
  const mockReset = jest.fn();
  const mockOk = jest.fn();
  const value = 1;
  const element = shallow(
    <UnwrappedPad
      store={store}
      value={value}
      addCalcStep={mockAddCalcStep}
      undo={mockUndo}
      reset={mockReset}
      ok={mockOk}
    />
  );
  element.simulate('click');
  expect(mockUndo).not.toHaveBeenCalled();
  expect(mockReset).not.toHaveBeenCalled();
  expect(mockOk).not.toHaveBeenCalled();
  expect(mockAddCalcStep).toHaveBeenCalledWith(value);
});

it('calls reset', () => {
  const mockAddCalcStep = jest.fn();
  const mockUndo = jest.fn();
  const mockReset = jest.fn();
  const mockOk = jest.fn();
  const element = shallow(
    <UnwrappedPad
      store={store}
      display={'reset'}
      value={'reset'}
      addCalcStep={mockAddCalcStep}
      undo={mockUndo}
      reset={mockReset}
      ok={mockOk}
    />
  );
  element.simulate('click');
  expect(mockUndo).not.toHaveBeenCalled();
  expect(mockReset).toHaveBeenCalled();
  expect(mockOk).not.toHaveBeenCalled();
  expect(mockAddCalcStep).not.toHaveBeenCalled();
});

it('calls undo', () => {
  const mockAddCalcStep = jest.fn();
  const mockUndo = jest.fn();
  const mockReset = jest.fn();
  const mockOk = jest.fn();
  const element = shallow(
    <UnwrappedPad
      store={store}
      display={'undo'}
      value={'undo'}
      addCalcStep={mockAddCalcStep}
      undo={mockUndo}
      reset={mockReset}
      ok={mockOk}
    />
  );
  element.simulate('click');
  expect(mockUndo).toHaveBeenCalled();
  expect(mockReset).not.toHaveBeenCalled();
  expect(mockOk).not.toHaveBeenCalled();
  expect(mockAddCalcStep).not.toHaveBeenCalled();
});

it('calls ok', () => {
  const mockAddCalcStep = jest.fn();
  const mockUndo = jest.fn();
  const mockReset = jest.fn();
  const mockOk = jest.fn();
  const element = shallow(
    <UnwrappedPad
      store={store}
      display={'ok'}
      value={'ok'}
      addCalcStep={mockAddCalcStep}
      undo={mockUndo}
      reset={mockReset}
      ok={mockOk}
    />
  );
  element.simulate('click');
  expect(mockUndo).not.toHaveBeenCalled();
  expect(mockReset).not.toHaveBeenCalled();
  expect(mockOk).toHaveBeenCalled();
  expect(mockAddCalcStep).not.toHaveBeenCalled();
});
