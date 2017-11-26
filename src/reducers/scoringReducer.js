import * as types from '../constants/actionTypes';
import { getStandingPins, getDownPinsList, getScores, isFrameComplete, isGameComplete } from './scoringUtilities';
import { List } from 'immutable';

var roll = 0;

const initialState = {
  standingPins: 10,
  downPinsList: List(),
  scores: List(),
  frame: 1,
  frameComplete: false,
  gameComplete: false
};

export const scoringReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.ROLL: {
    roll++;
    const downPinsList = getDownPinsList(state.downPinsList, state.frame, roll, action.downPins);
    const scores = getScores(downPinsList, state.frame);
    return {
      standingPins: getStandingPins(state.standingPins, action.downPins),
      downPinsList,
      scores,
      frame: state.frame,
      frameComplete: isFrameComplete(roll, action.downPins),
      gameComplete: isGameComplete(state.scores)  
    };
  }

  case types.NEW_FRAME: 
    roll = 0;
    return {
      standingPins: 10,
      downPinsList: state.downPinsList,
      scores: getScores(state.downPinsList, state.frame),
      frame: state.frame + 1,
      frameComplete: false,
      gameComplete: isGameComplete(state.scores)   
    };

  case types.NEW_GAME: 
    roll = 0;
    return initialState;
    
  default:
    return state;
  }
};
