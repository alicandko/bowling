import * as types from '../constants/actionTypes';
import { getStandingPins, getDownPinsList, getScores, isFrameComplete, isGameComplete } from './scoringUtilities';
import { List } from 'immutable';

const initialState = {
  standingPins: 10,
  downPinsList: List(),
  scores: List(),
  roll: 0,
  frame: 1,
  frameComplete: false,
  gameComplete: false
};

const scoringReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.ROLL: {
    const downPinsList = getDownPinsList(state.downPinsList, state.frame, state.roll, action.downPins);
    const scores = getScores(downPinsList, state.frame);
    return {
      standingPins: getStandingPins(state.standingPins, action.downPins),
      downPinsList,
      scores,
      roll: state.roll + 1,
      frame: state.frame,
      frameComplete: isFrameComplete(state.roll, action.downPins),
      gameComplete: isGameComplete(state.scores)  
    };
  }

  case types.NEW_FRAME: 
    return {
      standingPins: 10,
      downPinsList: state.downPinsList,
      scores: getScores(state.downPinsList, state.frame),
      roll: 0,
      frame: state.frame + 1,
      frameComplete: false,
      gameComplete: isGameComplete(state.scores)   
    };

  case types.NEW_GAME: 
    return initialState;
    
  default:
    return state;
  }
};

export default scoringReducer;
