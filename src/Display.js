import React from 'react';
import './Display.css';
import { connect } from 'react-redux';

const Display = ({ result, steps }) => {
  return (
    <div className="display">
      {result ? (
        <span>{result}</span>
      ) : (
        (steps || []).map((step, idx) => <span key={idx}>{step}</span>)
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  steps: state.calculator.steps,
  result: state.calculator.result
});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);
