import * as actions from './';
import * as types from '../constants/actionTypes';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

describe('actions', () => {
  it('should create ROLL action', () => {
    const downPins = 5;
    const expectedAction = {
      type: types.ROLL,
      downPins
    };
    expect(actions.roll(downPins)).toEqual(expectedAction);
  });

  it('should create NEW_FRAME action', () => {
    const expectedAction = {
      type: types.NEW_FRAME
    };
    expect(actions.newFrame()).toEqual(expectedAction);
  });

  describe('play', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    describe('when game is not complete', () => {
      it('should create ROLL action', () => {
        const expectedActions = [
          { type: types.ROLL, downPins: expect.any(Number) }
        ];
    
        const store = mockStore({ scoringReducer: { standingPins: 10, frameComplete: false, gameComplete: false } });
    
        store.dispatch(actions.play());
        expect(store.getActions()).toEqual(expectedActions);
      });

      describe('when frame is complete', () => {
        it('should create NEW_FRAME action', () => {
          jest.useFakeTimers();
          const expectedActions = [
            expect.any(Object),
            { type: types.NEW_FRAME }
          ];
      
          const store = mockStore({ scoringReducer: { standingPins: 10, frameComplete: true, gameComplete: false } });
      
          store.dispatch(actions.play());
      
          jest.runOnlyPendingTimers();
      
          expect(store.getActions()).toEqual(expectedActions);
        });
  
        it('should wait 500ms to create NEW_FRAME action', () => {
          jest.useFakeTimers();
          const store = mockStore({ scoringReducer: { standingPins: 10, frameComplete: true, gameComplete: false } });
      
          store.dispatch(actions.play());
      
          expect(setTimeout.mock.calls.length).toBe(1);
          expect(setTimeout.mock.calls[0][1]).toBe(500);
        });
      });
    });

    describe('when game is complete', () => {
      it('should create no action', () => {
        const expectedActions = [];
    
        const store = mockStore({ scoringReducer: { gameComplete: true } });
    
        store.dispatch(actions.play());
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});