import { SET_BOARD_DICE, SET_LETTERS_LIST, SCRAMBLE_LETTERS, START_COUNT, SET_TIME_REMAINING, RESET_TIME, SET_TIME_IS_UP } from "../actions";
import { dice4by4, dice5by5 } from '../components/dicedata'

const initialTime = 180;

export const initialState = {

    lettersList: [],
    remaining: initialTime,
    timeIsUp: false,
    isCounting: false,
    boardDice: dice5by5,
    boardDiceName: "5 x 5",

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
    const useLetters2 = lettersListScramble(useLetters)

    return useLetters2;
}


export const reducer = (state = initialState, action) => {
    switch(action.type) {
    
        case (SET_BOARD_DICE):
            if (state.boardDiceName === "4 x 4") {

                return ({
                    ...state,
                    boardDice: dice5by5,
                    boardDiceName: "5 x 5"
                })
            } else
            return ({
                ...state,
                boardDice: dice4by4,
                boardDiceName: "4 x 4"
            })
        case (SET_LETTERS_LIST):

            const useLetters = chooseLetters(action.payload)
            
            return ({
                ...state,
                lettersList: useLetters
            })

        case (SCRAMBLE_LETTERS):
            
            const rescrambleLetters = chooseLetters(action.payload)
            
            return ({
                ...state,
                lettersList: rescrambleLetters
            })

        case (START_COUNT):

            return ({
                ...state,
                isCounting: true,
                timeIsUp: false
            })
        case (SET_TIME_REMAINING):
            return ({
                ...state,
                remaining: action.payload
            })
        
        case (RESET_TIME):
            return ({
                ...state,
                remaining: initialTime,
                isCounting: false,
                timeIsUp: false
            })
        case (SET_TIME_IS_UP):
            return ({
                ...state,
                timeIsUp: true,
                isCounting: false
            })
            
        default:
            return state;
    }
}


