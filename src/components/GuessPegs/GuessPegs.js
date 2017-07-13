import React from 'react';
import GuessPeg from '../GuessPeg/GuessPeg';
import './GuessPegs.css';

const GuessPegs = (props) => {
  return (
    <div className="GuessPegs">
      {props.guess.map((g, idx) => (
        <GuessPeg g={g} idx={idx} key={idx} pickGuess={props.pickGuess}/>
      ))}
    </div>
  );
}

export default GuessPegs;
