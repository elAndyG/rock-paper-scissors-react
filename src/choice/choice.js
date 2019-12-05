import React, { useState } from 'react';

import './choice.css';

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
  setTimeout(() => setState({ class: '' }), 300);
};

const Choice = (props) => {
  const [choiceStatus, setChoiceStatus] = useState({ class: '' });

  return (
    <div
      className={`choice ${choiceStatus.class}`}
      onClick={() => {
        const result = props.onClick(props.choice);
        updateStatusNotificationColors(result.status, setChoiceStatus);
        return result;
      }}
    >
      <img src={imageUrlSwitch[props.choice]} alt="" />
      {/* <img src={`images/${props.choice}.png`} alt="" /> */}
    </div>
  );
};

export default Choices;
