import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';
import './GuessRow.css';

const GuessRow = (props) => {
  return (
      <div className="GuessRow">
        <GuessPegs guess={props.guess.guess}/>
        <GuessScore score={props.guess.score}/>
      </div>
  );
}

export default GuessRow;
