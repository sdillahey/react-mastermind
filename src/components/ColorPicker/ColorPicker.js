import React from 'react';

const ColorPicker = (props) => {
  return (
    <div>
      {props.colors.map((color, idx) =>
        <div key={idx}>{color}</div>
      )}
    </div>
  );
}

export default ColorPicker;
