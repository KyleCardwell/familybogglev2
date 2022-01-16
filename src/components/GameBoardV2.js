import React, { useEffect }from 'react';
import { connect } from 'react-redux';
import DiceV2 from './DiceV2';
import { scrambleLetters, setLettersList, setBoardDice } from '../actions'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(36)
            .substring(1);
    }

    return s4() + s4() + s4() + s4() + s4()+ s4()+ s4();
}

const GameBoard = (props) => {

    useEffect(() => {
        props.setLettersList(props.boardDice)
      },[props.boardDice])
      
    const sizeClass = () => {
        if(props.boardDiceName === "5 x 5"){
        return "grid5"
        } else {
        return "grid4"
        }
    }

    return (
        <div className="gameboardLarge">

            <section className="squareContainer">

                <div className={`${sizeClass()}`}>
                        {props.lettersList.map(letter => {
                            return (
                                <DiceV2 
                                    key={guid()}
                                    letter={letter}
                                />
                            )
                        })}
                </div>

            </section>
            <div className="board-buttons">

                <Button 
                    variant="contained"
                    color="secondary"
                    onClick={() => props.setBoardDice()}
                >Make {props.boardDiceName === "5 x 5" ? "4 x 4": "5 x 5"}</Button>

                <Button 
                    variant="contained"
                    color="secondary"
                    onClick={() => props.scrambleLetters(props.boardDice)}
                >Scramble Dice</Button>
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return({

        lettersList: state.lettersList,
        boardDice: state.boardDice,
        boardDiceName: state.boardDiceName

    })

};

export default connect(mapStateToProps, {scrambleLetters, setLettersList, setBoardDice})(GameBoard);
