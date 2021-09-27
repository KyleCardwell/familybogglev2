export const SET_BOARD_DICE = "SET_BOARD_DICE"
export const SET_LETTERS_LIST = "SET_DICE_LIST"
export const SCRAMBLE_LETTERS = "SCRAMBLE_LETTERS"
export const START_COUNT = "START_COUNT"
export const RESET_TIME = "RESET_TIME"
export const SET_TIME_REMAINING = "SET_TIME_REMAINING"
export const SET_TIME_IS_UP = "SET_TIME_IS_UP"
export const TIMER_COUNT_UP = "TIMER_COUNT_UP"
export const TIMER_COUNT_DOWN = "TIMER_COUNT_DOWN"
export const SET_TIME_BTN = "SET_TIME_BTN"
export const START_GAME = "START_GAME"
export const SET_SHOW_NEW_GAME_MODAL = "SET_SHOW_NEW_GAME_MODAL"
export const SET_INITIAL_TIME = "SET_INITIAL_TIME"
export const SET_IS_COUNTING = "SET_IS_COUNTING"

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

export const timerCountUp = () => {
    return ({type: TIMER_COUNT_UP})
}

export const timerCountDown = () => {
    return ({type: TIMER_COUNT_DOWN})
}

export const startGame = () => {
    return ({type: START_GAME})
}

export const setShowNewGameModal = () => {
        return ({type: SET_SHOW_NEW_GAME_MODAL})
}

export const setInitialTime = (newTime) => {
    return ({type: SET_INITIAL_TIME, payload: newTime})
}

export const setIsCounting = (value) => {
    return ({type: SET_IS_COUNTING, payload: value})
}