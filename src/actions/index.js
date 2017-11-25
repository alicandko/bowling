import * as types from '../constants/actionTypes';

export const roll = () => {
  return {
    type: types.ROLL,
    downPins: 5
  };
};

