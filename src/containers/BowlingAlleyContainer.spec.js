import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import BowlingAlleyContainer from './BowlingAlleyContainer';
import { List } from 'immutable';

describe('BowlingAlleyContainer', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  
  it('should map the states to props', () => {
    const store = mockStore({ scoringReducer: { standingPins: 10, frameComplete: false, gameComplete: false } });
    const context = {
      store,
    };    
    const enzymeWrapper = shallow(<BowlingAlleyContainer />, { context });
    expect(enzymeWrapper.props().pins).toBeDefined();
    expect(enzymeWrapper.props().frameComplete).toBeDefined();
    expect(enzymeWrapper.props().gameComplete).toBeDefined();
    expect(enzymeWrapper.props().onThrowClick).toBeDefined();
    expect(enzymeWrapper.props().onNewGameClick).toBeDefined();
  });

  it('should return a represantion of standing pins', () => {
    const store = mockStore({ scoringReducer: { standingPins: 10, frameComplete: false, gameComplete: false } });
    const context = {
      store,
    };
    const enzymeWrapper = shallow(<BowlingAlleyContainer />, { context });    
    const expected = List.of(
      List.of(' ', 'O', ' ', 'O', ' ', 'O', ' ', 'O', ' '),
      List.of(' ', ' ', 'O', ' ', 'O', ' ', 'O', ' ', ' '),
      List.of(' ', ' ', ' ', 'O', ' ', 'O', ' ', ' ', ' '),
      List.of(' ', ' ', ' ', ' ', 'O', ' ', ' ', ' ', ' ')
    );
    expect(enzymeWrapper.props().pins).toEqual(expected);
  });
});
