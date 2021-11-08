import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button'
import { connect } from 'react-redux';
import { resetTime, startCount, setTimeRemaining, setTimeIsUp, timerCountDown, timerCountUp, setIsCounting, setShowNewGameModal, startGame } from '../actions'
import TimeSlider from './TimeSlider';

function Timer(props) {

    const [ counters, showCounters ] = useState(false)

    let myCounter;

    useEffect(() => {
        countDown()
    },[props.isCounting, props.seconds])

    const countDown = () => {

        if(props.seconds > 0) {

            if (props.isCounting === true) {
    
                myCounter = setTimeout(() => {
                    const timeLeft = props.seconds
                    const timeMinus = timeLeft - 1;
                    props.setTimeRemaining(timeMinus)
    
                }, 1000)
                    
            }

        } else {

            props.setTimeIsUp()
        }

    }

    const setTimeToggle = () => {

        clearTimeout(myCounter)
        props.setIsCounting(false)
        showCounters(!counters)
  
    }

    
    return (
        <div className="timer">

            <div className="board-buttons">

                {!props.timeIsUp ? "" : <Button
                    variant="contained"
                    onClick={() => {
                        props.startGame()
                        props.setShowNewGameModal()
                    }
                    }
                >New Game</Button>}
                <h3>{props.seconds > 0 ? `${Math.floor(props.seconds/60)}:${props.seconds % 60 > 9 ? props.seconds % 60 : "0" + props.seconds % 60}` : "TIME IS UP!"}</h3>
                
            </div>
            
            <div className="board-buttons">


                {counters === false ? <Button
                    variant="contained"
                    onClick={() => props.startCount()}
                    color="secondary"
                >Start Timer</Button> : <TimeSlider />}

                <Button
                    variant="contained"
                    onClick={() => setTimeToggle()}
                    color="secondary"
                >{counters === false ? "Set Time" : "OK" }</Button>

                {counters === false? <Button
                    variant="contained"
                    onClick={() => {
                        clearTimeout(myCounter)
                        props.resetTime()}
                    }
                    
                    color="secondary"
                >Reset Timer</Button> : ""}

            </div>


        </div>
    )
}

const mapStateToProps = state => {
    return ({
        isCounting: state.isCounting,
        seconds: state.remaining,
        setTime: state.setTime,
        timeIsUp: state.timeIsUp,
        gameIsStarting: state.gameIsStarting
    })
}

export default connect(mapStateToProps, {resetTime, startCount, setTimeRemaining, setTimeIsUp, timerCountUp, timerCountDown, setIsCounting, setShowNewGameModal, startGame})(Timer)