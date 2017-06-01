import React from 'react';
import GuessPeg from '../GuessPeg/GuessPeg'

const GuessPegs = (props) => {
  return (
    <div>
      {props.guess.map((g, idx) => (
        <GuessPeg g={g} key={idx}/>
      ))}
    </div>
  );
}

export default GuessPegs;
