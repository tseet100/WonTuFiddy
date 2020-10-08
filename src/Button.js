import './Button.css';
import React, {useEffect, useState} from 'react';
import {useStateValue} from './StateProvider';

function Button({click, isActive, mode}) {
  const [{board, target}, dispatch] = useStateValue();

  const highScore = window.localStorage.getItem(`score${mode}`)
    ? window.localStorage.getItem(`score${mode}`)
    : 'click some tile';
  return (
    <div>
      <p className="target">Target: {target}</p>
      <p className="target">High Score: {highScore}s</p>
      <div className={`tiles__${mode}`}>
        {board.map((tile) => (
          <button className="eachTile" key={tile} value={tile} onClick={click}>
            {tile}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Button;
