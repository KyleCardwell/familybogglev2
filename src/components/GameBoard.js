import React from 'react';
import { connect } from 'react-redux';
import Dice from './Dice'

let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(36)
            .substring(1);
    }

    return s4() + s4() + s4() + s4() + s4()+ s4()+ s4();
}

const GameBoard = (props) => {

    return (
        <div className="gameBoard">
                {props.lettersList.map(letter => {
                    return (
                        <Dice 
                            key={guid()}
                            letter={letter}
                        />
                    )
                })}
        </div>

    )
}

const mapStateToProps = state => {
    return({

        lettersList: state.lettersList,
        boardDice: state.boardDice

    })

};

export default connect(mapStateToProps)(GameBoard);
