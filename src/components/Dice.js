import React, { useEffect } from 'react';
import { connect } from 'react-redux';

function Dice(props) {

    const sizeClass = () => {
        if(props.boardDiceName === "5 x 5"){
            return "fiveby5"
        } else {
            return "fourby4"
        }
    }

    const timeIsUpClass = () => {
        if(props.timeIsUp === false) {
            return ""
        } else {
            return "timeDone"
        }
    }

    const pausedGameClass = () => {
        if (props.showPauseGameModal === true){

            return "content-hide"
        } else {
            return ""
        }
        
    }

        return (
            <div className={`diceCube ${sizeClass()} ${timeIsUpClass()} ${pausedGameClass()}`}>

                <h2 className="diceLetter">{props.letter}</h2>

            </div>
        )

}

const mapStateToProps = state => {
    return ({

        boardDiceName: state.boardDiceName,
        timeIsUp: state.timeIsUp,
        showPauseGameModal: state.showPauseGameModal

    })

}

export default connect(mapStateToProps)(Dice);