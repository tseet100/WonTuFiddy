import './Button.css';
import React, {useEffect, useState} from 'react';
import {useStateValue} from './StateProvider';

function Button({click, mode}) {
  const [{board, target}, dispatch] = useStateValue();

  return (
    <div>
      <p className="target">Target: {target}</p>
      <div className={`tiles__${mode}`}>
        {board.map((tile) => (
          <button className="eachTile" key={tile} value={tile} onClick={click}>
            <h4>{tile}</h4>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Button;
