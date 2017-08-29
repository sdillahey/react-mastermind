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
      secretCode: ['#DD0038', '#A80094', '#FF732F', '#890022'],
      selColorIdx: 0,
      guesses: [this.currentGuess()]
    };
  }

  currentGuess = () => {
    return {
      guess: [null, null, null, null],
      score: {
        perfect: 0,
        almost: 0
      }
    };
  }

  pickColor = (idx) => {
    this.setState({selColorIdx: idx})
  }

  pickGuess = (idx) => {
    let currentGuessIdx = this.state.guesses.length - 1;
    let currentGuess = this.state.guesses[currentGuessIdx];
    currentGuess.guess[idx] = this.state.colors[this.state.selColorIdx];
    let guesses = this.state.guesses;
    guesses[currentGuessIdx] = currentGuess;
    this.setState({guesses: guesses});
  }

  newGame = () => {
    this.setState({
      //set new secret
      secretCode: ['#DD0038', '#A80094', '#FF732F', '#890022'],
      selColorIdx: 0,
      guesses: [this.currentGuess()]
    })
  }

  render() {
    return (
      <div>
        <header className="App-header">React Mastermind</header>
        <div className="container App-container">
          <div className="App-main">
            <GameBoard
              guesses={this.state.guesses}
              pickGuess={this.pickGuess}/>
          </div>
          <div className="App-gamecontrols">
            <ColorPicker
              colors={this.state.colors}
              selColorIdx={this.state.selColorIdx}
              pickColor={this.pickColor}/>
            <NewGameButton newGame={this.newGame}/>
            <ScoreButton />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
