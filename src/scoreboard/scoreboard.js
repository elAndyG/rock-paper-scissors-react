import React from 'react';

import './scoreboard.css';

const Scoreboard = (props) => {
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
};

export default Scoreboard;
