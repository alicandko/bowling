import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import './BowlingAlley.css';

const BowlingAlley = ({ pins, frameComplete, gameComplete, onThrowClick, onNewGameClick }) => (
  <div className="bowling-alley-container">
    <div className="bowling-alley">
      <div className="pins">
        <ul>
          {pins.map((pinRow, key) =>
            <pre key={key}>
              <li className='aa'>{ pinRow }</li>
            </pre>
          )}
        </ul>
      </div>
      <div className="buttons">
        <button disabled={isButtonDisabled(frameComplete, gameComplete)} onClick={onThrowClick}>Throw</button>
        <button onClick={onNewGameClick}>New Game</button>
      </div>
    </div>
  </div>
);

const isButtonDisabled = (frameComplete, gameComplete) => {
  return frameComplete || gameComplete;
};

BowlingAlley.propTypes = {
  pins: PropTypes.instanceOf(List).isRequired,
  frameComplete: PropTypes.bool.isRequired,
  gameComplete: PropTypes.bool.isRequired,
  onThrowClick: PropTypes.func.isRequired,
  onNewGameClick: PropTypes.func.isRequired
};

export default BowlingAlley;