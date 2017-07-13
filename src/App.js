import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import NewGameButton from './components/NewGameButton/NewGameButton';
import ScoreButton from './components/ScoreButton/ScoreButton';

class App extends Component {
  constructor() {
    super();
    let colors = ['#A80094', '#DD0038', '#FF732F', '#890022'];
    this.state = {
      colors: colors,
      secretCode: ['#A80094', '#DD0038', '#FF732F', '#890022'],
      selColorIdx: 0,
      guesses: [this.getNewGuess()]
    };
  }

  getNewGuess = () => ['#A80094', '#DD0038', '#FF732F', '#890022'];

  render() {
    return (
      <div>
        <header className="App-header">React Mastermind</header>
        <div className="container App-container">
          <div className="App-main">
            <GameBoard guesses={this.state.guesses}/>
          </div>
          <div className="App-gamecontrols">
            <ColorPicker colors={this.state.colors}/>
            <NewGameButton />
            <ScoreButton />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
