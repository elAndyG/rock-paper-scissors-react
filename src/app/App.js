import React, { useState } from 'react';
import './App.css';
import '../scoreboard/Scoreboard.css';
import '../result/Result.css';
import '../choice/Choice.css';
import { choiceOptions, game } from '../game/game';

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

const updateStatusNotificationColors = (status, setState) => {
  let notificationClass = '';
  switch (status) {
    case 'win':
      notificationClass = 'green-glow';
      break;
    case 'lose':
      notificationClass = 'red-glow';
      break;
    default:
      notificationClass = 'gray-glow';
      break;
  }

  setState({ class: notificationClass });
  setTimeout(() => setState({ class: '' }), 1000);
};

const Choice = (props) => {
  const [choiceStatus, setChoiceStatus] = useState({ class: '' });

  return (
    <div
      className={`choice ${choiceStatus.class}`}
      onClick={() => {
        const result = props.onClick(props.choice);
        updateStatusNotificationColors(result.status, setChoiceStatus);
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

function Result(props) {
  return (
    <div className="result">
      <p>
        {props.gameStatus.player} covers {props.gameStatus.computer}. You win!
      </p>
    </div>
  );
}

const onChoiceClick = (choice) => {
  return game(choice);
};

function App() {
  const [gameStatus, setGameStatus] = useState({
    wins: 0,
    losses: 0,
    status: 'win',
    player: 'Rock',
    computer: 'Paper'
  });

  return (
    <div className="App">
      <header>
        <h1>Rock Paper Scissors</h1>
      </header>
      <Scoreboard score={gameStatus} />
      <Result gameStatus={gameStatus} />
      <Choices choices={choiceOptions} onClick={onChoiceClick} />
      <p>Make your move!</p>
    </div>
  );
}

export default App;
