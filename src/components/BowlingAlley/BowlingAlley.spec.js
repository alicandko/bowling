import React from 'react';
import { shallow } from 'enzyme';
import { List } from 'immutable';
import BowlingAlley from './BowlingAlley';

const setup = (frameComplete, gameComplete) => {
  const props = {
    pins: List.of(
      List.of(' ', 'O', ' ', 'O', ' ', 'O', ' ', 'O', ' '),
      List.of(' ', ' ', 'O', ' ', 'O', ' ', 'O', ' ', ' '),
      List.of(' ', ' ', ' ', 'O', ' ', 'O', ' ', ' ', ' '),
      List.of(' ', ' ', ' ', ' ', 'O', ' ', ' ', ' ', ' ')
    ),
    frameComplete,
    gameComplete,
    onThrowClick: jest.fn(),
    onNewGameClick: jest.fn()
  };

  const enzymeWrapper = shallow(<BowlingAlley {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('BowlingAlley', () => {

  it('should render correctly', () => {
    const { enzymeWrapper } = setup(false, false);
    expect(enzymeWrapper).toMatchSnapshot();
  });
  
  describe('throw button', () => {
    describe('when the frame is complete', () => {
      it('should be disabled', () => {
        const { enzymeWrapper } = setup(true, false);
    
        const throwButton = enzymeWrapper.find('button').first();
    
        expect(throwButton.props().disabled).toBe(true);
      });
    });

    describe('when the game is complete', () => {
      it('should be disabled', () => {
        const { enzymeWrapper } = setup(false, true);
    
        const throwButton = enzymeWrapper.find('button').first();
    
        expect(throwButton.props().disabled).toBe(true);
      });
    });

    describe('when clicked', () => {
      it('should call onThrowClick', () => {
        const { enzymeWrapper, props } = setup(false, false);
    
        const throwButton = enzymeWrapper.find('button').first();
        throwButton.simulate('click');
    
        expect(throwButton.props().onClick).toBeCalled();
        expect(props.onThrowClick.mock.calls.length).toBe(1);
      });
    });
  });

  describe('new game button', () => {
    describe('when clicked', () => {
      it('should call onNewGameClick', () => {
        const { enzymeWrapper, props } = setup(false, false);
    
        const newGameButton = enzymeWrapper.find('button').at(1);
        newGameButton.simulate('click');
    
        expect(newGameButton.props().onClick).toBeCalled();
        expect(props.onNewGameClick.mock.calls.length).toBe(1);
      });
    });
  });

});