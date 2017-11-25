import * as types from '../constants/actionTypes';
import { getStandingPins, getDownPinsList, isFrameComplete } from './scoringUtilities';
import { List } from 'immutable';

var roll = 0;

const initialState = {
  standingPins: 10,
  downPinsList: List(),
  frame: 1,
  frameComplete: false,
};

export const scoringReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.ROLL:
    roll++;
    return {
      standingPins: getStandingPins(state.standingPins, action.downPins),
      downPinsList: getDownPinsList(state.downPinsList, state.frame, roll, action.downPins),
      frame: state.frame,
      frameComplete: isFrameComplete(roll, action.downPins)
    };

  case types.NEW_FRAME: 
    roll = 0;
    return {
      standingPins: 10,
      downPinsList: state.downPinsList,
      frame: state.frame + 1,
      frameComplete: false 
    };
    
  default:
    return state;
  }
};
