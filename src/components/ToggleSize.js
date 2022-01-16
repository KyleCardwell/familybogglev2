import React, { useState, useEffect } from "react";
import ToggleButtton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { connect } from "react-redux";
import { setBoardDice, set4x4, set5x5, setLettersList } from '../actions'

function ToggleSize(props) {
    const [gameBoardSize, setGameBoardSize ] = useState('right');

    const handleAlignment = (event, newAlignment) => {
        if (newAlignment !== null) {
            setGameBoardSize(newAlignment);
        }
    }

    useEffect(() => {
        props.setLettersList(props.boardDice)
      },[props.boardDice])

    return (
        <ToggleButtonGroup
            value={gameBoardSize}
            exclusive
            onChange={handleAlignment}
            aria-label="game board size"        
        >
            <ToggleButtton
                value="left" aria-label="4x4"
                onClick={() => {
                    props.set4x4()

                }}
                >4 x 4</ToggleButtton>
            <ToggleButtton
                value="right" aria-label="5x5"
                onClick={() => {
                    props.set5x5()
          
                }}
            >5 x 5</ToggleButtton>
        
        </ToggleButtonGroup>
    )
}

const mapStateToProps = (state) => {
    return({
        boardDice: state.boardDice,
    })
}

export default connect(mapStateToProps, {setBoardDice, set4x4, set5x5, setLettersList})(ToggleSize);