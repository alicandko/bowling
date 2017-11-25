import * as types from '../constants/actionTypes';

export const roll = (downPins) => {
  return {
    type: types.ROLL,
    downPins
  };
};

export const newFrame = () => {
  return {
    type: types.NEW_FRAME,
  };
};

export const play = () => {
  return (dispatch, getState) => {
    const { standingPins } = getState().scoringReducer;
    const downPins = Math.floor((Math.random() * standingPins) + 1);
    dispatch(roll(downPins));

    const { frameComplete } = getState().scoringReducer;
    if (frameComplete) {
      dispatch(newFrame());
    }
  };
};

