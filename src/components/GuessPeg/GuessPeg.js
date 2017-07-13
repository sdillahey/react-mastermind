import React from 'react';
import './GuessPeg.css';

const GuessPeg = (props) => {
  return (
    <div className="guesspeg" style={{backgroundColor: props.g}}>
    </div>
  );
}

export default GuessPeg;
