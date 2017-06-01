import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import NewGameButton from './components/NewGameButton/NewGameButton';
import ScoreButton from './components/ScoreButton/ScoreButton';

class App extends Component {
  constructor() {
    super();
    let colors = ['#155765', '#57652A', '#AB9353', '#4D2C3D'];
    this.state = {
      colors: colors
    };
  }
  render() {
    return (
      <div>
        <header className="App-header">React Mastermind</header>
        <GameBoard />
        <ColorPicker colors={this.state.colors}/>
        <NewGameButton />
        <ScoreButton />
      </div>
    );
  }
}

export default App;
