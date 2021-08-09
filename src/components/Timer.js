import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core'
import { connect } from 'react-redux';
import { resetTime, startCount, setTimeRemaining, setTimeIsUp, timerCountDown, timerCountUp } from '../actions'

function Timer(props) {

    const [ counters, showCounters ] = useState(false)

    useEffect(() => {
        countDown()
    },[props.isCounting, props.seconds])

    const countDown = () => {

        if(props.seconds > 0) {

            if (props.isCounting === true) {
    
                setTimeout(() => {
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
        showCounters(!counters)
  
    }

    
    return (
        <div className="timer">

            <div className="board-buttons">

                {counters === true ? <Button className="counterButton"
                    variant="contained"
                    onClick={() => props.timerCountDown()}
                    color="secondary"
                >Count Down</Button> : ""}

                <h3>{props.seconds > 0 ? props.seconds : "TIME IS UP!"}</h3>
                
                {counters === true ? <Button className="counterButton"
                    variant="contained"
                    onClick={() => props.timerCountUp()}
                    color="secondary"
                >Count Up</Button> : ""}
            </div>
            
            <div className="board-buttons">

                {counters === false ? <Button
                    variant="contained"
                    onClick={() => props.startCount()}
                    color="secondary"
                >Start Timer</Button> : ""}

                <Button
                    variant="contained"
                    onClick={() => setTimeToggle()}
                    color="secondary"
                >{counters === false ? "Set Time" : "OK" }</Button>

                {counters === false? <Button
                    variant="contained"
                    onClick={() => props.resetTime()}
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
        setTime: state.setTime
    })
}

export default connect(mapStateToProps, {resetTime, startCount, setTimeRemaining, setTimeIsUp, timerCountUp, timerCountDown})(Timer)