import React from 'react';

const BowlingAlley = ({ onThrowClick }) => (
  <div>
    <button type="button" onClick={onThrowClick}>Throw</button>
  </div>
);

export default BowlingAlley;