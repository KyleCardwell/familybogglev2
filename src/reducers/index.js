import { SET_BOARD_DICE, TIMER_START, SET_LETTERS_LIST } from "../actions";
import { dice4by4, dice5by5 } from '../components/dicedata'

const initialTime = 120;

export const initialState = {

    lettersList: [],
    remaining: initialTime,
    timeIsUp: false,
    boardDice: dice5by5,
    boardDiceName: "5 x 5",
    isCounting: false,

}

const lettersListScramble = (array) => {
    const newArray = array;
    for(let i = newArray.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = newArray[i]
      newArray[i] = newArray[j]
      newArray[j] = temp
    }
    return newArray;
}


const chooseLetters = (diceArray) => {
    const diceLetters = diceArray.map(die => {
        const letter = die[Math.floor(Math.random() * die.length)]
        return letter;
    })

    const useLetters = lettersListScramble(diceLetters);

    return useLetters;
}


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case (TIMER_START):
            return({
                ...state,
                isCounting: true
            })
    case (SET_BOARD_DICE):
        if (state.boardDice === dice4by4) {
            return ({
                ...state,
                boardDice: dice5by5
            }
            )
        } else
        return ({
            ...state,
            boardDice: dice4by4
        })
    case (SET_LETTERS_LIST):

        const useLetters = chooseLetters(action.payload)
        
        return ({
            ...state,
            lettersList: useLetters
        })
        default:
            return state;
    }
}


