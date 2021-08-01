import './App.css';
import React, { useEffect } from 'react'
import GameBoard from './components/GameBoard'
import { Grid, Button } from '@material-ui/core'
import { connect } from 'react-redux';
import { setLettersList } from './actions';

const App = (props) => {

  // console.log(props.lettersList)
  // console.log(setLettersList((props.boardDice)))
  
  useEffect(() => {
    props.setLettersList(props.boardDice)
  },[])

  return (
    <div className="App">

      <Grid className="App-header">

        Hello
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
