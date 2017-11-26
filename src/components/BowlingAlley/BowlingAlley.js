import React from 'react';

const BowlingAlley = ({ onThrowClick, onNewGameClick }) => (
  <div>
    <button type="button" onClick={onThrowClick}>Throw</button>
    <button type="button" onClick={onNewGameClick}>New Game</button>
  </div>
);

export default BowlingAlley;