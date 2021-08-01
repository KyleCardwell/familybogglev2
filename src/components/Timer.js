import React from 'react';
import { Button } from '@material-ui/core'

export default function Timer() {

    
    return (
        <div className="timer">


            <h3>{this.state.seconds}</h3>
            {/* <h3>{this.props.remaining}</h3> */}
            
            <div className="board-buttons">

                <Button
                    variant="contained"
                    onClick={this.startCount}
                    color="secondary"
                >Start</Button>

                <Button
                    variant="contained"
                    onClick={this.resetTime}
                    color="secondary"
                >Reset</Button>

            </div>


            {/* <Countdown
                date={Date.now() + 120000}
            >
                <Completionist />
            </Countdown> */}


        </div>
    )
}

