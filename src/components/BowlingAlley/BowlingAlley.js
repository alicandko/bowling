import React from 'react';
import './BowlingAlley.css';

const BowlingAlley = ({ pins, frameComplete, gameComplete, onThrowClick, onNewGameClick }) => (
  <div className="bowling-alley-container">
    <div className="bowling-alley">
      <div className="pins">
        <ul>
          {pins.map(pinRow =>
            <pre>
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

export default BowlingAlley;