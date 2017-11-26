import React from 'react';
//import PropTypes from 'prop-types'
import './Scoreboard.css';

const Scoreboard = ({ content }) => (
  <div className='scoreboard-container'>
    <div className='scoreboard'>
      {content.map(frame => 
        <div className='frame'>
          <div className='roll-container'>
            <div className='roll'>{ frame.get(0) }</div>
            <div className='roll'>{ frame.get(1) }</div>
          </div>
          <div className='score'>{ frame.get(2) }</div>
        </div>
      )}
    </div>
  </div>
);

export default Scoreboard;