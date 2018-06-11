import React from 'react';
import './Pad.css';
import { actionCreators as calculatorActionCreators } from './calculator';
import { connect } from 'react-redux';

export class UnwrappedPad extends React.Component {
  handleClick = () => {
    const { value, undo, reset, ok, addCalcStep } = this.props;
    switch (value) {
      case 'undo':
        undo();
        break;
      case 'reset':
        reset();
        break;
      case 'ok':
        ok();
        break;
      default:
        return addCalcStep(value);
    }
  };
  render() {
    return (
      <div className="pad" onClick={this.handleClick}>
        {this.props.display}
      </div>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = dispatch => ({
  addCalcStep: val => dispatch(calculatorActionCreators.addExpression(val)),
  undo: () => dispatch(calculatorActionCreators.undo()),
  reset: () => dispatch(calculatorActionCreators.reset()),
  ok: () => dispatch(calculatorActionCreators.ok())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnwrappedPad);
