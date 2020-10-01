import React, {useState} from 'react';
import './Game.css';

function Game() {
  const [count, setCount] = useState(0);

  function click() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={click} className="number">
        1
      </button>
      <button onClick={click} className="number">
        1
      </button>
      <button onClick={click} className="number">
        1
      </button>
      <button onClick={click} className="number">
        1
      </button>
      <button onClick={click} className="number">
        1
      </button>
      <button onClick={click} className="number">
        1
      </button>
    </div>
  );
}

export default Game;
