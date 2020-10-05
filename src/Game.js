import React, {useState, useEffect} from 'react';
import './Game.css';
import Timer from './Timer';
import Button from './Button';
import {useStateValue} from './StateProvider';
import {clickUp, selectMode, easyMode, mediumMode, modes} from './reducer';
import {gameDifficultyLimits} from './Functions';

function Game() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [{board, target, mode}, dispatch] = useStateValue();

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
    // let restartGame = !mode ? (
    //   <h1>HERE</h1>
    // ) : mode === 'medium' ? (
    //   mediumMode()
    // ) : mode === 'easy' ? (
    //   easyMode()
    // ) : (
    //   <h1>hardmode</h1>
    // );
    let restartGame = mode === 'medium' ? mediumMode() : easyMode();
    dispatch(restartGame);
  }

  function click(e) {
    let setLimit = gameDifficultyLimits[mode];
    if (!isActive && target !== setLimit) setIsActive(!isActive);
    if (+e.target.value === setLimit && target === setLimit) {
      window.alert('YOU WON');
      setIsActive(!isActive);
    }
    if (+e.target.value === target) {
      dispatch(clickUp(board.indexOf(+e.target.value), target, mode));
    }
  }

  function chooseMode(e) {
    dispatch(selectMode(e.target.value));
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 10);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>
      <Timer
        reset={reset}
        seconds={seconds}
        isActive={isActive}
        toggle={toggle}
      />
      <select onChange={chooseMode}>
        {modes.map((mode) => (
          <option key={mode} value={mode}>
            {mode}
          </option>
        ))}
      </select>
      {!mode ? '' : <Button mode={mode} click={click} />}
    </div>
  );
}

export default Game;
