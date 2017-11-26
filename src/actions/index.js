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

export const newGame = () => {
  return {
    type: types.NEW_GAME,
  };
};

export const play = () => {
  return (dispatch, getState) => {
    const { gameComplete } = getState().scoringReducer;
    if (!gameComplete) {
      const { standingPins } = getState().scoringReducer;
      const downPins = getRandomNumber(1, standingPins);      
      dispatch(roll(downPins));

      const { frameComplete } = getState().scoringReducer;
      if (frameComplete) {
        setTimeout(() => {
          dispatch(newFrame());
        }, 500);
      }
    }
  };
};

const getRandomNumber = (lowerLimit, upperLimit) => {
  return Math.floor((Math.random() * upperLimit) + lowerLimit);
};


