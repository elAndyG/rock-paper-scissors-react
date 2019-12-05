import React, { useState } from 'react';
import './App.css';
import '../scoreboard/Scoreboard.css';
import '../result/Result.css';
import '../choice/Choice.css';

// moved the images to imgur.com so they are accessible through stackblitz.
const imageUrlSwitch = {
  rock: `https://i.imgur.com/fkqCKgz.png`,
  paper: `https://i.imgur.com/gVdtAZx.png`,
  scissors: `https://i.imgur.com/UK6e04z.png`
};

const Choices = (props) => (
  <div className="choices">
    {props.choices.map((choice) => (
      <Choice key={choice} choice={choice} onClick={() => props.onClick(choice)} />
    ))}
  </div>
);

const Choice = (props) => {
  return (
    <div
      className="choice"
      onClick={() => {
        props.onClick();
      }}
    >
      <img src={imageUrlSwitch[props.choice]} alt="" />
      {/* <img src={`images/${props.choice}.png`} alt="" /> */}
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

  const onChoiceClick = (choice) => {
    console.log(`clicked ${choice}`);
  };

  return (
    <div className="App">
      <header>
        <h1>Rock Paper Scissors</h1>
      </header>
      <Scoreboard score={score} />
      <Result />
      <Choices choices={options} onClick={onChoiceClick} />
      <p>Make your move!</p>
    </div>
  );
}

export default App;
