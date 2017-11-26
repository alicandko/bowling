import { connect } from 'react-redux';
import BowlingAlley from '../components/BowlingAlley/BowlingAlley';
import { play, newGame } from '../actions';
import { List } from 'immutable';

const getPins = (standingPins) => {
  let pins = List();  
  let row = List.of(' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ');
  const pinPositions = List.of([3, 1], [3, 3], [3, 5], [3, 7], [2, 2], [2, 4], [2, 6], [1, 3], [1,5], [0, 4]);
  for (let i = 0; i < 4; i++) { 
    pins = pins.push(row);
  }

  for (let i = 0; i < standingPins; i++) {
    const y = (pinPositions.get(i)[0]);
    const x = (pinPositions.get(i)[1]);
    pins = pins.setIn([y, x], 'O');
  }
  return pins.reverse();
};

const mapStateToProps = (state) => ({
  pins: getPins(state.scoringReducer.standingPins),
  frameComplete: state.scoringReducer.frameComplete,
  gameComplete: state.scoringReducer.gameComplete
});

const mapDispatchToProps = (dispatch) => ({
  onThrowClick: () => {
    dispatch(play());
  },
  onNewGameClick: () => {
    dispatch(newGame());
  }
});

const BowlingAlleyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BowlingAlley);

export default BowlingAlleyContainer;
