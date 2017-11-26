import * as util from './scoringUtilities';
import { List } from 'immutable';

const PIN_COUNT = 10;
const LAST_EXTRA_FRAME = 12;

describe('scoring utilities', () => {

  describe('getStandingPins', () => {
    it('should return the standing pins', () => {
      expect(util.getStandingPins(10, 2)).toEqual(8);
    });
  });

  describe('isFrameComplete', () => {
    describe('when the frame is complete', () => {
      it('should return true', () => {
        expect(util.isFrameComplete(1, PIN_COUNT)).toEqual(true);
        expect(util.isFrameComplete(2, 5)).toEqual(true);
      });
    });
    describe('when the frame is not complete', () => {
      it('should return false', () => {
        expect(util.isFrameComplete(1, 5)).toEqual(false);    
      });
    });
  });

  describe('isGameComplete', () => {
    describe('when the game is complete', () => {
      it('should return true', () => {
        const scoresComplete = List([0, 1, 2, 3, 4, 5 ,6, 7, 8, 9]);
        expect(util.isGameComplete(scoresComplete)).toEqual(true);
      });
    });
    describe('when the game is not complete', () => {
      it('should return false', () => {
        const scoresIncomplete = List([0, 1, 2, 3, 4, 5 ,6, 7]);  
        expect(util.isGameComplete(scoresIncomplete)).toEqual(false);  
      });
    });
  });

  describe('getDownPinsList', () => {
    describe('when it is the first roll', () => {
      it('should add a new frame in downPinsList', () => {
        const downPinsList = List([ List([1, 2]), List([2, 3]) ]);
        const expectedDownPinsList = List([ List([1, 2]), List([2, 3]), List([5]) ]);
        expect(util.getDownPinsList(downPinsList, 3, 1, 5)).toEqual(expectedDownPinsList);
      });
    });

    describe('when it is the second roll', () => {
      it('should push to given frame in downPinsList', () => {
        const downPinsList = List([ List([1, 2]), List([2]) ]);
        const expectedDownPinsList = List([ List([1, 2]), List([2, 5]) ]);
        expect(util.getDownPinsList(downPinsList, 2, 2, 5)).toEqual(expectedDownPinsList);
      });   
    });
    
    describe('it is the last extra frame', () => {
      it('should push to previous frame in downPinsList', () => {
        const downPinsList = List([ List([1, 2]), List([2, 1]), List([1, 2]), List([2, 1]), List([1, 2]), 
          List([2, 1]),List([1, 2]), List([2, 1]),List([1, 2]), List([2, 1]),List([1]) ]);
       
        const expectedDownPinsList = List([ List([1, 2]), List([2, 1]), List([1, 2]), List([2, 1]), List([1, 2]), 
          List([2, 1]),List([1, 2]), List([2, 1]),List([1, 2]), List([2, 1]),List([1, 5]) ]);
        expect(util.getDownPinsList(downPinsList, LAST_EXTRA_FRAME, 1, 5)).toEqual(expectedDownPinsList);
      }); 
    });
    
    describe('by default', () => {
      it('should return downPinsList when none', () => {
        const downPinsList = List([ List([1, 2]), List([2]) ]);
        expect(util.getDownPinsList(downPinsList, 100, 100, 5)).toEqual(downPinsList);
      });
    });  
  });

  describe('getScores', () => {
    describe('when it is a strike', () => {
      describe('when no rolls after the strike has occurred', () => {
        it('should return the previous scores', () => {
          const downPinsList = List([ List([1, 2]), List([10]) ]);
          const expectedScores= List([3]);
          expect(util.getScores(downPinsList, 2)).toEqual(expectedScores);
        });
      });

      describe('when one roll after the strike has occurred', () => {
        it('should return the previous scores', () => {
          const downPinsList = List([ List([1, 2]), List([10]) ]);
          const expectedScores= List([3]);
          expect(util.getScores(downPinsList, 2)).toEqual(expectedScores);
        });
      });

      describe('when two rolls after the strike have occurred', () => {
        it('should return the scores with the strike bonus', () => {
          const downPinsList = List([ List([1, 2]), List([10]), List([3, 5]) ]);
          const expectedScores= List([3, 21]);
          expect(util.getScores(downPinsList, 2)).toEqual(expectedScores);
        });
      });
    });
    
    describe('when it is a spare', () => {
      describe('when no rolls after the spare has occurred', () => {
        it('should return the previous scores', () => {
          const downPinsList = List([ List([1, 2]), List([1, 9]) ]);
          const expectedScores= List([3]);
          expect(util.getScores(downPinsList, 2)).toEqual(expectedScores);
        });
      });
  
      describe('when one roll after the spare has occurred', () => {
        it('should return the scores with the spare bonus', () => {
          const downPinsList = List([ List([1, 2]), List([1, 9]), List([3]) ]);
          const expectedScores= List([3, 16]);
          expect(util.getScores(downPinsList, 2)).toEqual(expectedScores);
        });
      });
    });
  
    describe('when it neither a strike nor a spare', () => {
      describe('when one roll in the frame has occurred', () => {
        it('should return the previous scores', () => {
          const downPinsList = List([ List([1, 2]), List([1]) ]);
          const expectedScores= List([3]);
          expect(util.getScores(downPinsList, 2)).toEqual(expectedScores);
        });
      });
  
      describe('when two rolls in the frame have occurred', () => {
        it('should return the score with the frame score', () => {
          const downPinsList = List([ List([1, 2]), List([1, 5]) ]);
          const expectedScores= List([3, 9]);
          expect(util.getScores(downPinsList, 2)).toEqual(expectedScores);
        });
      });
    });  
  });
});