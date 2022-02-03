import { WorkSharp } from "@mui/icons-material";
import axios from "axios";
import {
  SET_BOARD_DICE,
  SET_LETTERS_LIST,
  SCRAMBLE_LETTERS,
  START_COUNT,
  SET_TIME_REMAINING,
  RESET_TIME,
  SET_TIME_IS_UP,
  TIMER_COUNT_DOWN,
  TIMER_COUNT_UP,
  SET_TIME_BTN,
  START_GAME,
  SET_SHOW_NEW_GAME_MODAL,
  SET_INITIAL_TIME,
  SET_IS_COUNTING,
  SET_4X4,
  SET_5X5,
  SET_SHOW_PAUSE_GAME_MODAL,
} from "../actions";
import { dice4by4, dice5by5 } from "../components/dicedata";

export const initialState = {
  lettersList: [],
  initialTime: 180,
  remaining: 180,
  timeIsUp: false,
  isCounting: false,
  boardDice: dice5by5,
  boardDiceName: "5 x 5",
  setTime: false,
  showNewGameModal: true,
  showPauseGameModal: false,
  gameIsStarting: false,
  wordsFound: {},
};

const lettersListScramble = (array) => {
  const newArray = array;
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }

  return newArray;
};

const chooseLetters = (diceArray) => {
  const diceLetters = diceArray.map((die) => {
    const letter = die[Math.floor(Math.random() * die.length)];
    return letter;
  });

  const useLetters = lettersListScramble(diceLetters);
  const useLetters2 = lettersListScramble(useLetters);

  return useLetters2;
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case (SET_BOARD_DICE):
    //     if (state.boardDiceName === "4 x 4") {

    //         return ({
    //             ...state,
    //             boardDice: dice5by5,
    //             boardDiceName: "5 x 5"
    //         })
    //     } else
    //     return ({
    //         ...state,
    //         boardDice: dice4by4,
    //         boardDiceName: "4 x 4"
    //     })

    case SET_4X4:
      return {
        ...state,
        boardDice: dice4by4,
        boardDiceName: "4 x 4",
      };

    case SET_5X5:
      return {
        ...state,
        boardDice: dice5by5,
        boardDiceName: "5 x 5",
      };

    case SET_LETTERS_LIST:
      const useLetters = chooseLetters(action.payload);

      let wordsInfo = {};

      console.log("hello all words")

      axios
        // .post("https://family-boggle-db.herokuapp.com/api/boggleLetters", {
        .post("http://localhost:3333/api/boggleLetters", {
          lettersList: useLetters.join("")
        })
        .then((res) => {
          wordsInfo = res.data.wordsInfo

          console.log("all words", res.data)
        })
        .catch((err) => {
          console.log(err);
        });

      return {
        ...state,
        lettersList: useLetters,
        wordsInfo: wordsInfo,
      };

    case SCRAMBLE_LETTERS:
      const rescrambleLetters = chooseLetters(action.payload);

      return {
        ...state,
        lettersList: rescrambleLetters,
      };

    case START_COUNT:
      return {
        ...state,
        isCounting: true,
        timeIsUp: false,
      };
    case SET_TIME_REMAINING:
      return {
        ...state,
        remaining: action.payload,
      };
    case SET_INITIAL_TIME:
      if (action.payload === undefined) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          initialTime: action.payload,
        };
      }
    case RESET_TIME:
      return {
        ...state,
        isCounting: false,
        timeIsUp: false,
        remaining: state.initialTime,
      };
    case SET_TIME_IS_UP:
      return {
        ...state,
        timeIsUp: true,
        isCounting: false,
      };
    case TIMER_COUNT_UP:
      const countUp = state.remaining + 10;
      return {
        ...state,
        remaining: countUp,
        initialTime: countUp,
      };
    case TIMER_COUNT_DOWN:
      const countDown = state.remaining - 10;
      return {
        ...state,
        remaining: countDown,
        initialTime: countDown,
      };
    case SET_TIME_BTN:
      return {
        ...state,
        setTime: !state.setTime,
      };
    case START_GAME:
      return {
        ...state,
        gameIsStarting: !state.gameIsStarting,
        showPauseGameModal: false,
      };
    case SET_SHOW_NEW_GAME_MODAL:
      return {
        ...state,
        showNewGameModal: !state.showNewGameModal,
      };

    case SET_SHOW_PAUSE_GAME_MODAL:
      return {
        ...state,
        showPauseGameModal: !state.showPauseGameModal,
        isCounting: !state.isCounting,
      };

    case SET_IS_COUNTING:
      if (action.payload === undefined) {
        return {
          ...state,
          isCounting: !state.isCounting,
        };
      } else {
        return {
          ...state,
          isCounting: action.payload,
        };
      }
    default:
      return state;
  }
};
