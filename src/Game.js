import React, {useState, useEffect} from 'react';
import './Game.css';
import Timer from './Timer';
import Button from './Button';
import {useStateValue} from './StateProvider';
import {clickUp, newGame} from './reducer';

function Game() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [{board, target}, dispatch] = useStateValue();

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
    dispatch(newGame());
  }

  function click(e) {
    if (!isActive && target !== 50) setIsActive(!isActive);
    if (+e.target.value === 50 && target === 50) {
      window.alert('YOU WON');
      setIsActive(!isActive);
    }
    if (+e.target.value === target) {
      dispatch(clickUp(board.indexOf(+e.target.value), target));
    }
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
      <p className="target">Target: {target}</p>
      <Button click={click} />
    </div>
  );
}

export default Game;
