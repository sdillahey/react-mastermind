import React from 'react'

const NewGameButton = (props) => {
  return (
    <button className="btn btn-secondary" onClick={() => props.newGame()}>
      New Game
    </button>
    );
}

export default NewGameButton;
