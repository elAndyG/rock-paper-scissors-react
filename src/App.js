import React from "react";
import "./App.css";
import "./Header.css";
import "./Scoreboard.css";
import "./Result.css";
import "./Choice.css";

const Choices = props => (
  <div className="choices">
    {props.choices.map(choice => (
      <Choice key={choice} choice={choice} />
    ))}
  </div>
);

function Choice(props) {
  return (
    <div className="choice">
      <img src={`images/${props.choice}.png`} alt="" />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Rock Paper Scissors</h1>
    </header>
  );
}

function Scoreboard() {
  return (
    <div className="score-board">
      <div id="user-label" className="badge">
        user
      </div>
      <div id="computer-label" className="badge">
        comp
      </div>
      <span id="user-score">0</span>:<span id="computer-score">0</span>
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
  const options = ["rock", "paper", "scissors"];

  return (
    <div className="App">
      <Header />
      <Scoreboard />
      <Result />
      <Choices choices={options} />
      <p>Make your move!</p>
    </div>
  );
}

export default App;
