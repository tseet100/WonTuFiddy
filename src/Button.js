import './Button.css';
import React, {useEffect, useState} from 'react';
import {useStateValue} from './StateProvider';

// function nums() {
//   let arr = [];
//   for (let i = 1; i < 26; i++) {
//     arr.push(i);
//   }
//   arr = arr.reduce(
//     (a, v) => a.splice(Math.floor(Math.random() * a.length), 0, v) && a,
//     []
//   );
//   return arr.reduce(
//     (a, v) => a.splice(Math.floor(Math.random() * a.length), 0, v) && a,
//     []
//   );
// }

// let board = nums();

function Button({click}) {
  const [{board}, dispatch] = useStateValue();
  return (
    <div className="tiles">
      {board.map((tile) => (
        <button className="eachTile" value={tile} onClick={click}>
          {tile}
        </button>
      ))}
    </div>
  );
}

export default Button;
