import { useState } from 'react'
import './Styles/App.css'

const Square = (props: any) => {
  return(
    <button 
      className="square"
      onClick={props.onClickEvent}
      >
      {props.value}
    </button>
  );
};

const Board = () => {
  /* const initialSquares = [
    null,null,null,
    null,null,null,
    null,null,null,
  ]; */
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  //initial state of xIsnext set to true (first player plays X)
  const [xIsNext, setXisNext] = useState(true);

  const handleClickEvent = (i: any) => {
    //make a copy of the squares state array
    const newSquares = [...squares];
    // mutate the copy setting it's i element to xIsNext boolean value
    newSquares[i] = xIsNext ? "0" : "1";
    //call the setsquares function with the mutated copy
    setSquares(newSquares);
    setXisNext(!xIsNext);
  };
  const renderSquare = (i: any) => {
    return(
      
        <Square 
        value={squares[i]} 
        onClickEvent={() => handleClickEvent(i)}
        />
      
    )

  }

  const  status = `Next Player: ${xIsNext ?  '0' : '1'}`;

  return (
    <main className="board">
      <header>
        <h2>zero's n one's game</h2>
        <div className="status">{status}</div>
      </header>
      
      <div className="boardrow">
      {renderSquare(1)}{renderSquare(2)}{renderSquare(3)}
      </div>
      <div className="boardrow">
        {renderSquare(4)}{renderSquare(5)}{renderSquare(6)}
      </div>
      <div className="boardrow">
        {renderSquare(7)}{renderSquare(8)}{renderSquare(9)}
      </div>
    </main>
  );
};

const App = () => {
  return(
  <div className="app">
    <Board />
  </div>
  );
};
  

export default App
