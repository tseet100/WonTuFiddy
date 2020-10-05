import React from 'react';
import './Timer.css';

const Timer = ({seconds, isActive, toggle, reset}) => {
  return (
    <div className="timer">
      <div className="timer__display">
        {(Math.round(seconds * 100) / 10000).toFixed(2)}s
      </div>
      <div className="timer__buttons">
        {/* <button
          className={`button button-primary button-primary-${
            isActive ? 'active' : 'inactive'
          }`}
          onClick={toggle}
        >
          {isActive ? 'Pause' : 'Start'}
        </button> */}
        <button onClick={reset}>new</button>
      </div>
    </div>
  );
};

export default Timer;
