import React from 'react';
import './GuessPeg.css';

const GuessPeg = (props) => {
  return (
    <div className="GuessPeg" 
      style={ props.g ? {backgroundColor: props.g} : {border: '2px gray dotted'}}
      onClick={() =>props.pickGuess(props.idx)}>
    </div>
  );
}

export default GuessPeg;