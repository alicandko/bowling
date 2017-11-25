import { connect } from 'react-redux';
import Scoreboard from '../components/Scoreboard';

const getContent = (downPinsList) => {
  console.log(downPinsList);
};

const mapStateToProps = (state) => ({
  content: getContent(state.scoringReducer.downPinsList, state.scoringReducer.scores)
  
});

const ScoreboardContainer = connect(
  mapStateToProps
)(Scoreboard);

export default ScoreboardContainer;
