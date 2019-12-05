import React, { useState } from 'react';

import './App.css';
import { choiceOptions, game } from '../game/game';
import Choices from '../choice/choice';
import Scoreboard from '../scoreboard/scoreboard';
import { Result } from '../result/result';

// moved the images to imgur.com so they are accessible through stackblitz.

function App() {
  const [gameStatus, setGameStatus] = useState({
    wins: 0,
    losses: 0,
    status: 'win',
    player: 'Rock',
    computer: 'Paper'
  });

  const onChoiceClick = (choice) => {
    const result = game(choice);
    const updatedGameStatus = { ...gameStatus };
    updatedGameStatus.status = result.status;

    switch (result.status) {
      case 'win':
        updatedGameStatus.wins += 1;
        break;
      case 'lose':
        updatedGameStatus.losses += 1;
        break;
      default:
        break;
    }
    updatedGameStatus.player = result.userChoice;
    updatedGameStatus.computer = result.computerChoice;

    setGameStatus({ ...updatedGameStatus, ...{ player: result.userChoice, computer: result.computerChoice } });

    return result;
  };

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
