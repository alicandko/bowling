import * as types from '../constants/actionTypes';
import { getStandingPins, getDownPinsList } from './scoringUtilities';
import { List } from 'immutable';


const initialState = {
  standingPins: 10,
  downPinsList: List(),
};

export const scoringReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.ROLL: {
    return {
      standingPins: getStandingPins(state.standingPins, action.downPins),
      downPinsList: getDownPinsList(state.downPinsList, action.downPins)
    };
  }
    
  default:
    return state;
  }
};
