import {medium, medium2, easy} from './Functions';

export const modes = ['select level', 'easy', 'medium', 'hard'];

export const initialState = {
  board: [],
  target: 1,
  difficulty: modes,
};

export const clickUp = (idx, target) => ({type: 'CLICK_UP', idx, target});
export const selectMode = (mode) => ({type: 'SELECT_MODE', mode});
export const easyMode = () => ({type: 'EASY_GAME'});
export const mediumMode = () => ({type: 'MEDIUM_GAME'});

const modeBoardObj = {
  easy: easy(),
  medium: medium(),
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
      newBoard[action.idx] = medium2()[state.target - 1];
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
