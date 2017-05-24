import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';

const GuessRow = (props) => {
  return (
    <div>
      This is the row
      <GuessPegs />
      <GuessScore />
    </div>
    );
}

export default GuessRow;
