import './App.css';
import React, { useEffect } from 'react'
import GameBoard from './components/GameBoard'
import GameBoardV2 from './components/GameBoardV2';
import Grid from '@mui/material/Grid';
import { connect } from 'react-redux';
import { setLettersList } from './actions';
import Timer from './components/Timer';
import NewGameModal from './components/NewGameModal';
import PauseGameModal from './components/PauseGameModal';
import PossibleWordsContainer from './components/PossibleWordsContainer';

const App = (props) => {

  
  useEffect(() => {
    props.setLettersList(props.boardDice)
  },[])

  return (
    <div className="App">

      <Grid className="App-header">
        
        {props.showNewGameModal ? <NewGameModal />
        // : props.showPauseGameModal ? <PauseGameModal />
        : <div className='gameContainer'>
            <div className='wordsBox'></div>
            <div className='gameBox'>
              <Timer />
              <GameBoardV2 />
            </div>
            <div className='wordsBox'>
              <PossibleWordsContainer />
            </div>
          </div>
        }
        {props.showPauseGameModal ? <PauseGameModal /> : "" }

      </Grid>

    </div>
  );
}

const mapStateToProps = state => {
  return({
    lettersList: state.lettersList,
    boardDice: state.boardDice,
    showNewGameModal: state.showNewGameModal,
    showPauseGameModal: state.showPauseGameModal,
    timeIsUp: state.timeIsUp

  })
}

export default connect(mapStateToProps, {setLettersList})(App);
