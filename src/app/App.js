import React, { useState } from 'react';
import './App.css';
import '../scoreboard/Scoreboard.css';
import '../result/Result.css';
import '../choice/Choice.css';

const Choices = (props) => (
  <div className="choices">
    {props.choices.map((choice) => (
      <Choice key={choice} choice={choice} />
    ))}
  </div>
);

const Choice = (props) => {
  return (
    <div className="choice">
      <img src={`images/${props.choice}.png`} alt="" />
    </div>
  );
};

function Scoreboard(props) {
  return (
    <div className="score-board">
      <div id="user-label" className="badge">
        user
      </div>
      <div id="computer-label" className="badge">
        comp
      </div>
      <span id="user-score">{props.score.wins}</span>:<span id="computer-score">{props.score.losses}</span>
    </div>
  );
}

function Result() {
  return (
    <div className="result">
      <p>Paper covers rock. You win!</p>
    </div>
  );
}

function App() {
  const [score, setScore] = useState({ wins: 0, losses: 0 });
  const options = ['rock', 'paper', 'scissors'];

  return (
    <div className="App">
      <header>
        <h1>Rock Paper Scissors</h1>
      </header>
      <Scoreboard score={score} />
      <Result />
      <Choices choices={options} />
      <p>Make your move!</p>
    </div>
  );
}

export default App;
