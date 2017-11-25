import { List } from 'immutable';

const PIN_COUNT = 10;

export const getStandingPins = (standingPins, downPins) => {
  return standingPins - downPins;
};

export const isFrameComplete = (roll, downPins) => {
  return (roll === 1 && downPins === PIN_COUNT) || roll === 2;
};

export const getDownPinsList = (downPinsList, frame, roll, downPins) => {
  const indexFrame = frame - 1;
  if (roll === 1) {
    return downPinsList.push(List([downPins]));          
  }
  if (roll === 2) {
    return downPinsList.set(indexFrame, downPinsList.get(indexFrame).push(downPins));        
  }
  return downPinsList;
};

