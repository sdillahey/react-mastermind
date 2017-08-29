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

  scoreGuess = (guessArr) => {
    let perfect = 0;
    let scoredArr = guessArr.slice();
    for (let i=0; i < guessArr.length; i++) {
      if (guessArr[i] === this.state.secretCode[i]) {
        perfect++;
        // need to remove perfectly scored pegs from BOTH the guess and secret
        scoredArr.splice(i, 1);
      }
    }
    //does this need to handle multiple of the right color in the wrong position? if only a single occurence in the secret...
    let almost = 0;
    for (let i=0; i < scoredArr.length; i++) {
      if (this.state.secretCode.includes(scoredArr[i])) {
        almost++;
      }
    }
    let score = {perfect: perfect, almost: almost}
    return score;
  }

  submitGuess = () => {
    let guesses = this.state.guesses;
    //determine the score of the submitted guess
    guesses[guesses.length-1].score = this.scoreGuess(guesses[guesses.length-1].guess);
    guesses.push(this.currentGuess());
    this.setState({guesses: guesses})
  }


  newGame = () => {
    this.setState({
      //need to set new secret
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
              pickGuess={this.pickGuess}
              submitGuess={this.submitGuess}/>
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
