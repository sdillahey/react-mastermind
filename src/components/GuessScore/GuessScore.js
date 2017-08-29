import React from 'react';
import './GuessScore.css';

const GuessScore = (props) => {

  return (
    <div className="GuessScore" onClick={() => props.submitGuess()}>
      0000
    </div>
  );
}

export default GuessScore;
