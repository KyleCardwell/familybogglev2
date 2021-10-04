import './App.css';
import React, { useEffect } from 'react'
import GameBoard from './components/GameBoard'
import GameBoardV2 from './components/GameBoardV2';
import Grid from '@mui/material/Grid';
import { connect } from 'react-redux';
import { setLettersList } from './actions';
import Timer from './components/Timer';
import NewGameModal from './components/NewGameModal';
import Square from './components/Square';

const App = (props) => {

  // console.log(props.lettersList)
  // console.log(setLettersList((props.boardDice)))
  
  useEffect(() => {
    props.setLettersList(props.boardDice)
  },[])

  return (
    <div className="App">

      <Grid className="App-header">
        
        {props.showNewGameModal ? <NewGameModal /> : <div>
          <Timer /> <GameBoardV2 />
          </div>
        }

      </Grid>

    </div>
  );
}

const mapStateToProps = state => {
  return({
    lettersList: state.lettersList,
    boardDice: state.boardDice,
    showNewGameModal: state.showNewGameModal

  })
}

export default connect(mapStateToProps, {setLettersList})(App);
