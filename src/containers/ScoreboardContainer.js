import { connect } from 'react-redux';
import Scoreboard from '../components/Scoreboard';

const getContent = (state) => {
  console.log(state);
};

const mapStateToProps = (state) => ({
  content: getContent(state.scoringReducer)
  
});

const ScoreboardContainer = connect(
  mapStateToProps
)(Scoreboard);

export default ScoreboardContainer;
