import React from 'react';
import Pad from './Pad';
import './CalcBoard.css';
import Display from './Display';

const CalcBoard = () => {
  return (
    <div className="calc-board">
      <Display />
      <div className="calc-board-container">
        <div className="calc-board-rows">
          <div className="calc-board-row">
            <Pad value={1} display="1" />
            <Pad value={2} display="2" />
            <Pad value={3} display="3" />
          </div>
          <div className="calc-board-row">
            <Pad value={4} display="4" />
            <Pad value={5} display="5" />
            <Pad value={6} display="6" />
          </div>
          <div className="calc-board-row">
            <Pad value={7} display="7" />
            <Pad value={8} display="8" />
            <Pad value={9} display="9" />
          </div>
          <div className="calc-board-row">
            <Pad value={0} display="0" />
            <Pad value={'.'} display="." />
          </div>
        </div>
        <div className="calc-board-rows">
          <div className="calc-board-row">
            <Pad value={'+'} display="+" />
          </div>
          <div className="calc-board-row">
            <Pad value={'-'} display="-" />
          </div>
          <div className="calc-board-row">
            <Pad value={'*'} display="*" />
          </div>
          <div className="calc-board-row">
            <Pad value={'/'} display="/" />
          </div>
        </div>
        <div className="calc-board-rows">
          <div className="calc-board-row">
            <Pad value={'undo'} display="C" />
          </div>
          <div className="calc-board-row">
            <Pad value={'reset'} display="CC" />
          </div>
        </div>
        <div className="calc-board-rows">
          <Pad value={'ok'} display="=" />
        </div>
      </div>
    </div>
  );
};

export default CalcBoard;
