import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardHeader, Container } from '@mui/material'
import { startGame, setShowNewGameModal, startCount } from '../actions';
import ToggleSize from './ToggleSize';
import TimeSlider from './TimeSlider';


const NewGameModal = (props) => {

    const [ countDown, setCountDown ] = useState(3);

    useEffect(() => {

        if(props.gameIsStarting === true) {

            if (countDown >= 0) {

                setTimeout(() => {
                    setCountDown(countDown - 1)
                }, 1000)

            } else {
                props.setShowNewGameModal()
                props.startCount()

            }
        }

    },[props.gameIsStarting, countDown])

    return (
        
        <div>

            {props.showNewGameModal ? 
            
                <Card className="newGameModal">
                    <CardHeader 
                        title={props.gameIsStarting ? "Game Starting in" : "New Game"}
                    />        

                    <Container>

                        {!props.gameIsStarting ?

                        <div className="modalControls">
                            
                           <div>                               
                                <ToggleSize />
                            </div>
                           <div>                               
                                <TimeSlider />
                            </div>

                            <div>
                                <Button color="primary" variant="contained" onClick={() => props.startGame()}>Start Now</Button>
                                
                            </div>
                        </div>
                        
                        : <h2>{countDown}</h2>}

                        
                    </Container>

                </Card>

            : null}

        </div>

    )
        

}

const mapStateToProps = (state) => {
    return({
        showNewGameModal: state.showNewGameModal,
        gameIsStarting: state.gameIsStarting,

    })
}

export default connect(mapStateToProps, {startGame, setShowNewGameModal, startCount})(NewGameModal);