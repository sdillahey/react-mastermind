import React from 'react';
import GuessRow from '../GuessRow/GuessRow';


const GameBoard = (props) => {
  return (
    <div>
      {props.guesses.map((guess, idx) => (
        <GuessRow guess={guess} key={idx}/>
      ))}
    </div>
  );
}

export default GameBoard;


