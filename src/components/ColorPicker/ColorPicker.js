import React from 'react';
import './ColorPicker.css';

const ColorPicker = (props) => {
  return (
    <div>
      {props.colors.map((color, idx) =>
        <div className="picker" key={idx} style={{backgroundColor: color}}></div>
      )}
    </div>
  );
}

export default ColorPicker;
