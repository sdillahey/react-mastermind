import React from 'react';
import GuessRow from '../GuessRow/GuessRow';


const GameBoard = (props) => {
  return (
    <div>
      {props.guesses.map((guess, idx) => (
        <GuessRow
          guess={guess}
          pickGuess={props.pickGuess}
          key={idx}
          submitGuess={props.submitGuess}/>
      ))}
    </div>
  );
}

export default GameBoard;


