import React from 'react';
import './Pad.css';
import { actionCreators as calculatorActionCreators } from './calculator';
import { connect } from 'react-redux';

class Pad extends React.Component {
  handleClick = () => {
    const { value } = this.props;
    switch (value) {
      case 'undo':
        this.props.undo();
        break;
      case 'reset':
        this.props.reset();
        break;
      case 'ok':
        this.props.ok();
        break;
      default:
        return this.props.addCalcStep(value);
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

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  addCalcStep: val => dispatch(calculatorActionCreators.addExpression(val)),
  undo: () => dispatch(calculatorActionCreators.undo()),
  reset: () => dispatch(calculatorActionCreators.reset()),
  ok: () => dispatch(calculatorActionCreators.ok())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pad);
