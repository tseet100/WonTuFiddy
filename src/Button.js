import './Button.css';
import React, {useEffect, useState} from 'react';

function nums() {
  let arr = [];
  for (let i = 1; i < 26; i++) {
    arr.push(i);
  }
  arr = arr.reduce(
    (a, v) => a.splice(Math.floor(Math.random() * a.length), 0, v) && a,
    []
  );
  return arr.reduce(
    (a, v) => a.splice(Math.floor(Math.random() * a.length), 0, v) && a,
    []
  );
}

let board = nums();

function Button({click}) {
  const [start, setStart] = useState(false);
  return (
    <div className="tiles">
      {/* {nums().map((tile) => (
        <button click={click}>{tile}</button>
      ))} */}

      {/* <button className="tiles" onClick={click} className="number">
        1
      </button> */}
      {board.map((tile) => (
        <div>
          <button className="eachTile" onClick={click}>
            {tile}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Button;
