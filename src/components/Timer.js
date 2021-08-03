import React, { useEffect } from 'react';
import { Button } from '@material-ui/core'
import { connect } from 'react-redux';
import { resetTime, startCount, setTimeRemaining, setTimeIsUp } from '../actions'

function Timer(props) {

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

    
    return (
        <div className="timer">


            <h3>{props.seconds > 0 ? props.seconds : "TIME IS UP!"}</h3>
            
            <div className="board-buttons">

                <Button
                    variant="contained"
                    onClick={() => props.startCount()}
                    color="secondary"
                >Start Timer</Button>

                <Button
                    variant="contained"
                    onClick={() => props.resetTime()}
                    color="secondary"
                >Reset Timer</Button>

            </div>


            {/* <Countdown
                date={Date.now() + 120000}
            >
                <Completionist />
            </Countdown> */}


        </div>
    )
}

const mapStateToProps = state => {
    return ({
        isCounting: state.isCounting,
        seconds: state.remaining
    })
}

export default connect(mapStateToProps, {resetTime, startCount, setTimeRemaining, setTimeIsUp})(Timer)