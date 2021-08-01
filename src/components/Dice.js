import React from 'react';
import { connect } from 'react-redux';

function Dice(props) {

    const sizeClass = () => {
        if(props.boardDiceName === "5 x 5"){
            return "fiveby5"
        } else {
            return "fourby4"
        }
    }

        return (
            <h2 className={`gameDice ${sizeClass()}`}>{props.letter}</h2>
        )

}

const mapStateToProps = state => {
    return ({

        boardDiceName: state.boardDiceName,

    })

}

export default connect(mapStateToProps)(Dice);