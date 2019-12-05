import React from 'react';

import './result.css';

export const Result = (props) => {
  let result = '';
  const user = '😎';
  const computer = '🤖';
  console.log(props.gameStatus.status);
  switch (props.gameStatus.status) {
    case 'win':
      result = `${props.gameStatus.player}${user} beats ${props.gameStatus.computer}${computer}. You win! 🌈`;
      break;
    case 'lose':
      result = `${props.gameStatus.computer}${computer} beats ${props.gameStatus.player}${user}. You lost! 💩`;
      break;
    default:
      result = `${props.gameStatus.player}${user} matched ${props.gameStatus.computer}${computer}. It's a draw! 🤷🏼‍♂️`;
      break;
  }
  return (
    <div className="result">
      <p>{result}</p>
    </div>
  );
};
