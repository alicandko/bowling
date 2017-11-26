import { connect } from 'react-redux';
import BowlingAlley from '../components/BowlingAlley/BowlingAlley';
import { play, newGame } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  onThrowClick: () => {
    dispatch(play());
  },
  onNewGameClick: () => {
    dispatch(newGame());
  }
});

const BowlingAlleyContainer = connect(
  null,
  mapDispatchToProps
)(BowlingAlley);

export default BowlingAlleyContainer;
