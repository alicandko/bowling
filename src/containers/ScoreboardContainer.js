import { connect } from 'react-redux';
import Scoreboard from '../components/Scoreboard';
import { List } from 'immutable';

const getContent = (downPinsList, scores) => {
  let boardContent = List();
  let frameContent = List.of('', '', '');
  for (let i = 0; i < 11; i++) { 
    boardContent = boardContent.push(frameContent);
  }
  boardContent.push(frameContent);
  
  downPinsList.forEach((frame, i) => {
    frame.forEach((rollDownPins, y) => {
      boardContent = boardContent.setIn([i, y], rollDownPins.toString());
    });
  });

  scores.forEach((score, i) => {
    boardContent = boardContent.setIn([i, 2], score.toString());
  });
  return boardContent;
};

const mapStateToProps = (state) => ({
  content: getContent(state.scoringReducer.downPinsList, state.scoringReducer.scores)
});

const ScoreboardContainer = connect(
  mapStateToProps
)(Scoreboard);

export default ScoreboardContainer;
