import { connect } from 'react-redux';
import BowlingAlley from '../components/BowlingAlley';
import { play } from '../actions';


const mapDispatchToProps = (dispatch) => ({
  onThrowClick: () => {
    dispatch(play());
  }
});

const BowlingAlleyContainer = connect(
  null,
  mapDispatchToProps
)(BowlingAlley);

export default BowlingAlleyContainer;
