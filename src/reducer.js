import {nums, replacementArr, easy} from './Functions';

export const modes = ['select level', 'easy', 'medium', 'hard'];

export const initialState = {
  board: {easy: easy(), medium: nums()},
  target: 1,
  difficulty: modes,
  replacementArr: replacementArr,
};

export const clickUp = (idx, target) => ({type: 'CLICK_UP', idx, target});
export const selectMode = (mode) => ({type: 'SELECT_MODE', mode});
export const easyMode = () => ({type: 'EASY_GAME'});
export const mediumMode = () => ({type: 'MEDIUM_GAME'});

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
        board: nums(),
        target: 1,
      };
    case 'CLICK_UP':
      let oldTarget = state.target;
      let newTarget = oldTarget + 1;
      let newBoard = [...state.board];
      newBoard[action.idx] = replacementArr[state.target - 1];
      return {
        ...state,
        target: newTarget,
        board: newBoard,
      };
    case 'SELECT_MODE':
      console.log('action', action);
      return {
        ...state,
        mode: action.mode,
      };
    default:
      return state;
  }
};

export default reducer;
