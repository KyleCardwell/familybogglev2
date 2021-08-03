import './App.css';
import React, { useEffect } from 'react'
import GameBoard from './components/GameBoard'
import { Grid } from '@material-ui/core'
import { connect } from 'react-redux';
import { setLettersList } from './actions';
import Timer from './components/Timer';

const App = (props) => {

  // console.log(props.lettersList)
  // console.log(setLettersList((props.boardDice)))
  
  useEffect(() => {
    props.setLettersList(props.boardDice)
  },[])

  return (
    <div className="App">

      <Grid className="App-header">
        <Timer />
        <GameBoard />

      </Grid>
    </div>
  );
}

const mapStateToProps = state => {
  return({
    lettersList: state.lettersList,
    boardDice: state.boardDice

  })
}

export default connect(mapStateToProps, {setLettersList})(App);
