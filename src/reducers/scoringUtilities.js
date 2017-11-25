export const getStandingPins = (standingPins, downPins) => {
  return standingPins - downPins;
};

export const getDownPinsList = (downPinsList, downPins) => {
  return downPinsList.push(downPins);
};