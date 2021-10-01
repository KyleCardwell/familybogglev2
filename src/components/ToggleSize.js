import React, { useState } from "react";
import ToggleButtton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { connect } from "react-redux";
import { setBoardDice } from '../actions'

function ToggleSize(props) {
    const [gameBoardSize, setGameBoardSize ] = useState('right');

    const handleAlignment = (event, newAlignment) => {
        if (newAlignment !== null) {
            setGameBoardSize(newAlignment);
        }
    }

    return (
        <ToggleButtonGroup
            value={gameBoardSize}
            exclusive
            onChange={handleAlignment}
            aria-label="game board size"        
        >
            <ToggleButtton
                value="left" aria-label="4x4"
                onClick={() => {props.setBoardDice()}}
            >4 x 4</ToggleButtton>
            <ToggleButtton
                value="right" aria-label="5x5"
                onClick={() => {props.setBoardDice()}}
            >5 x 5</ToggleButtton>
        
        </ToggleButtonGroup>
    )
}

export default connect(null, {setBoardDice})(ToggleSize);