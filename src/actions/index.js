export const SET_BOARD_DICE = "SET_BOARD_DICE"
export const SET_LETTERS_LIST = "SET_DICE_LIST"
export const SCRAMBLE_LETTERS = "SCRAMBLE_LETTERS"
export const START_COUNT = "START_COUNT"
export const RESET_TIME = "RESET_TIME"
export const SET_TIME_REMAINING = "SET_TIME_REMAINING"
export const SET_TIME_IS_UP = "SET_TIME_IS_UP"

export const setBoardDice = (array) => {
    return ({type: SET_BOARD_DICE, payload: array})
}

export const setLettersList = (array) => {
    return ({type: SET_LETTERS_LIST, payload: array})
}

export const scrambleLetters = array => {
    return ({type: SCRAMBLE_LETTERS, payload: array})
}

export const startCount = () => {
    return ({type: START_COUNT})
}

export const resetTime = () => {
    return ({type: RESET_TIME})
}

export const setTimeRemaining = (newTime) => {
    return ({type: SET_TIME_REMAINING, payload: newTime})
}

export const setTimeIsUp = () => {
    return ({type: SET_TIME_IS_UP})
}