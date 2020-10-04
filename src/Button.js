import './Button.css';
import React, {useEffect, useState} from 'react';
import {useStateValue} from './StateProvider';

function Button({click}) {
  const [{board}, dispatch] = useStateValue();
  return (
    <div className="tiles">
      {board.map((tile) => (
        <button className="eachTile" key={tile} value={tile} onClick={click}>
          {tile}
        </button>
      ))}
    </div>
  );
}

export default Button;
