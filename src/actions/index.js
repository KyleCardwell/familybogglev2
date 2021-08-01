export const TIMER_START = "TIMER_START"
export const SET_BOARD_DICE = "SET_BOARD_DICE"
export const SET_LETTERS_LIST = "SET_DICE_LIST"

export const setBoardSize = () => {
    return ({type: SET_BOARD_DICE})
}

export const setLettersList = (array) => {
    return ({type: SET_LETTERS_LIST, payload: array})
}