import {nums, replacementArr} from './Functions';

export const initialState = {
  board: nums(),
  target: 1,
  numArr: nums,
  replacementArr: replacementArr,
};

const reducer = (state, action) => {
  console.log('ACTION', action);
  switch (action.type) {
    case 'CLICK_UP':
      let oldTarget = state.target;
      let newTarget = oldTarget + 1;
      let newBoard = [...state.board];
      console.log('NEWBOARD', newBoard[action.idx]);
      newBoard[action.idx] = replacementArr[state.target - 1];
      console.log('NEWBOARD', newBoard);
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
