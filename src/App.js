import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import NewGameButton from './components/NewGameButton/NewGameButton';
import ScoreButton from './components/ScoreButton/ScoreButton';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">React Mastermind</header>
        <GameBoard />
        <ColorPicker />
        <NewGameButton />
        <ScoreButton />
      </div>
    );
  }
}

export default App;
