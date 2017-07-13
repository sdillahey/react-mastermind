import React from 'react';
import './ColorPicker.css';

const ColorPicker = (props) => {

  return (
    <div className="ColorPicker">
      {props.colors.map((color, idx) =>
        <div className="ColorPicker-btn" 
          onClick={() => props.pickColor(idx)}
          key={idx} 
          style={
            {backgroundColor: props.selColorIdx === idx ? 'white' : color,
            border: props.selColorIdx === idx ? `18px solid ${color}` : 0}
          }>
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
