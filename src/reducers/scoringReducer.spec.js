import reducer from './scoringReducer';
import * as types from '../constants/actionTypes';
import * as util from './scoringUtilities';
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

describe('scoring reducer', () => {

  util.getStandingPins = jest.fn();
  const mockValStandingPins = 5;
  util.getStandingPins.mockReturnValue(mockValStandingPins);
  
  util.getDownPinsList = jest.fn();
  const mockValDownPinsList = List([ List([1, 2]), List([2, 3]) ]);
  util.getDownPinsList.mockReturnValue(mockValDownPinsList);
  
  util.getScores = jest.fn();
  const mockValScores = List([1, 2, 3, 4]);
  util.getScores.mockReturnValue(mockValScores);

  util.getFrame = jest.fn();
  const mockValFrame = 5;
  util.getFrame.mockReturnValue(mockValFrame);

  util.isFrameComplete = jest.fn();
  const mockValFrameComplete = false;
  util.isFrameComplete.mockReturnValue(mockValFrameComplete);

  util.isGameComplete = jest.fn();
  const mockValGameComplete = false;
  util.isGameComplete.mockReturnValue(mockValGameComplete);

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ROLL', () => {    
    expect(
      reducer(initialState, {
        type: types.ROLL,
        downPins: 5
      })
    ).toEqual({
      standingPins: mockValStandingPins,
      downPinsList: mockValDownPinsList,
      scores: mockValScores,
      roll: initialState.roll + 1,
      frame: 1,
      frameComplete: mockValFrameComplete,
      gameComplete: mockValGameComplete
    });
  });

  it('should handle NEW_FRAME', () => {    
    expect(
      reducer(initialState, {
        type: types.NEW_FRAME
      })
    ).toEqual({
      standingPins: initialState.standingPins,
      downPinsList: initialState.downPinsList,
      scores: mockValScores,
      roll: 0,
      frame: initialState.frame + 1,
      frameComplete: false,
      gameComplete: mockValGameComplete
    });
  });

  it('should handle NEW_GAME', () => {    
    expect(
      reducer(initialState, {
        type: types.NEW_GAME
      })
    ).toEqual(initialState);
  });
});