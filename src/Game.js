import React, {useState, useEffect} from 'react';
import './Game.css';
import Timer from './Timer';
import Button from './Button';
import {useStateValue} from './StateProvider';
import {clickUp, selectMode, easyMode, mediumMode, modes} from './reducer';

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
    dispatch(mediumMode());
  }

  function click(e) {
    if (!isActive && target !== 50) setIsActive(!isActive);
    if (+e.target.value === 3 && target === 3) {
      window.alert('YOU WON');
      setIsActive(!isActive);
    }
    if (+e.target.value === target) {
      dispatch(clickUp(board.indexOf(+e.target.value), target));
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

  let easy = mode === 'easy' ? <h1>EASY MODE ACTIVATED</h1> : '';
  let medium = mode === 'medium' ? <Button click={click} /> : '';
  return (
    <div>
      <Timer
        reset={reset}
        seconds={seconds}
        isActive={isActive}
        toggle={toggle}
      />
      <p className="target">Target: {target}</p>
      <select onChange={chooseMode}>
        {modes.map((mode) => (
          <option key={mode} value={mode}>
            {mode}
          </option>
        ))}
      </select>
      {easy}
      {medium}
    </div>
  );
}

export default Game;
