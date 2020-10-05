import './Button.css';
import React, {useEffect, useState} from 'react';
import {useStateValue} from './StateProvider';

function Button({click}) {
  const [{board, target}, dispatch] = useStateValue();
  return (
    <div>
      <p className="target">Target: {target}</p>
      <div className="tiles">
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
