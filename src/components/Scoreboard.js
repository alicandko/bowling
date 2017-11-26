import React from 'react';
//import PropTypes from 'prop-types'

const Scoreboard = ({ content }) => (
  <div>
    {content.map(frame => 
      <div>
        <div className='roll'>{ frame.get(0) }</div>
        <div className='roll'>{ frame.get(1) }</div>
        <div className='score'>{ frame.get(2) }</div>
      </div>
    )}
  </div>
);

export default Scoreboard;