import {nums, replacementArr} from './Functions';

export const initialState = {
  board: nums(),
  target: 1,
  numArr: nums,
  replacementArr: replacementArr,
};

export const clickUp = (idx, target) => ({type: 'CLICK_UP', idx, target});
export const newGame = () => ({type: 'NEW_GAME'});

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEW_GAME':
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
    default:
      return state;
  }
};

export default reducer;
