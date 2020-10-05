import {medium, medium2, easy, easy2} from './Functions';

export const modes = ['select level', 'easy', 'medium', 'hard'];

export const initialState = {
  board: [],
  target: 1,
  mode: '',
};

export const clickUp = (idx, target, mode) => ({
  type: 'CLICK_UP',
  idx,
  target,
  mode,
});
export const selectMode = (mode) => ({type: 'SELECT_MODE', mode});
export const easyMode = () => ({type: 'EASY_GAME'});
export const mediumMode = () => ({type: 'MEDIUM_GAME'});

const modeBoardObj = {
  easy: easy(),
  medium: medium(),
};

const replacementObj = {
  easy: easy2(),
  medium: medium2(),
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'EASY_GAME':
      return {
        ...state,
        board: easy(),
        target: 1,
      };
    case 'MEDIUM_GAME':
      return {
        ...state,
        board: medium(),
        target: 1,
      };
    case 'CLICK_UP':
      let oldTarget = state.target;
      let newTarget = oldTarget + 1;
      let newBoard = [...state.board];
      let replacementArr = replacementObj[action.mode];
      console.log('NEWBOARD', action);
      newBoard[action.idx] = replacementArr[state.target - 1];
      return {
        ...state,
        target: newTarget,
        board: newBoard,
      };
    case 'SELECT_MODE':
      console.log('action', action);
      let modeFunction = modeBoardObj[action.mode];
      return {
        ...state,
        mode: action.mode,
        board: modeFunction,
      };
    default:
      return state;
  }
};

export default reducer;
