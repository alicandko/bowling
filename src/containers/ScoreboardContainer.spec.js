import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ScoreboardContainer from './ScoreboardContainer';
import { List } from 'immutable';


describe('ScoreboardContainer', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  
  it('should map the states to props', () => {
    const store = mockStore({ scoringReducer: { downPinsList: List(), scores: List() } });
    const context = {
      store,
    };    
    const enzymeWrapper = shallow(<ScoreboardContainer />, { context });
    expect(enzymeWrapper.props().content).toBeDefined();
  });

  it('return the scoreboar content', () => {
    const store = mockStore({ scoringReducer: { downPinsList: List.of(List.of(1, 3)), scores: List.of(4) } });
    const context = {
      store,
    };
    const enzymeWrapper = shallow(<ScoreboardContainer />, { context });    
    const expected = List.of(
      List.of('1', '3', '4'),
      List.of('', '', ''),
      List.of('', '', ''),
      List.of('', '', ''),
      List.of('', '', ''),
      List.of('', '', ''),
      List.of('', '', ''),
      List.of('', '', ''),
      List.of('', '', ''),
      List.of('', '', ''),
      List.of('', '', ''));
    expect(enzymeWrapper.props().content).toEqual(expected);
  });
});
