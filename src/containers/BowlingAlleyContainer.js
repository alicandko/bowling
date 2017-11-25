import { connect } from 'react-redux';
import BowlingAlley from '../components/BowlingAlley';
import { roll } from '../actions';


const mapDispatchToProps = (dispatch) => ({
  onThrowClick: () => {
    dispatch(roll());
  }
});

const BowlingAlleyContainer = connect(
  null,
  mapDispatchToProps
)(BowlingAlley);

export default BowlingAlleyContainer;
