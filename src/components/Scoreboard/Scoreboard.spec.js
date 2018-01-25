import React from 'react';
import { shallow } from 'enzyme';
import { List } from 'immutable';
import Scoreboard from './Scoreboard';

const setup = () => {
  const props = {
    content: List.of(
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
      List.of('', '', ''))
  };

  const enzymeWrapper = shallow(<Scoreboard {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('Scoreboard', () => {
  it('should render correctly', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
