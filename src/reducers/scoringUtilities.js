import { List } from 'immutable';

const PIN_COUNT = 10;

export const getStandingPins = (standingPins, downPins) => {
  return standingPins - downPins;
};

export const isFrameComplete = (roll, downPins) => {
  return (roll === 1 && downPins === PIN_COUNT) || roll === 2;
};

export const isGameComplete = (scores) => {
  const lastScoreIndex = 9;
  return scores.get(lastScoreIndex) ? true : false;
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

export const getScores = (downPinsList, frame) => {
  const flatDownList = downPinsList.flatten();
  let index = 0;
  let score = 0;
  let scores = List();

  const isStrike = () => {
    return flatDownList.get(index) === PIN_COUNT;
  };
  
  const isSpare = () => {
    return flatDownList.get(index) + flatDownList.get(index + 1) === PIN_COUNT;
  };

  const isStrikeCalculable = () => {
    return flatDownList.get(index + 1) && flatDownList.get(index + 2) ? true : false;
  };

  const isSpareCalculable = () => {
    return flatDownList.get(index + 2) ? true : false;
  };

  const isNormalFrameCalculable = () => {
    return flatDownList.get(index + 1) ? true : false;
  };

  for (let i = 0; i < frame; i++) {
    if (isStrike()) {         
      if (isStrikeCalculable()) {
        score += 10 + flatDownList.get(index + 1) + flatDownList.get(index + 2);
        scores = scores.push(score);
        index++;
      }
    } else if (isSpare()) {
      if (isSpareCalculable()) {
        score += 10 + flatDownList.get(index + 2);
        scores = scores.push(score);
        index += 2;   
      }
    } else {
      if (isNormalFrameCalculable()) {
        score += flatDownList.get(index) + flatDownList.get(index + 1);
        scores = scores.push(score);
        index += 2;  
      }            
    }
  }
  return scores;
};
