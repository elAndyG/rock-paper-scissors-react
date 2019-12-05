export const choiceOptions = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
  // randomize is 0, 1 or 2.
  const randomize = Math.floor(Math.random() * choiceOptions.length);
  return choiceOptions[randomize];
};
export const game = (userChoice) => {
  const computerChoice = getComputerChoice();
  const rock = 'rock';
  const scissors = 'scissors';
  const paper = 'paper';

  switch (userChoice.toLowerCase() + computerChoice.toLowerCase()) {
    case rock + scissors:
    case paper + rock:
    case scissors + paper:
      return { status: 'win', userChoice, computerChoice };
    case scissors + rock:
    case rock + paper:
    case paper + scissors:
      return { status: 'lose', userChoice, computerChoice };
    default:
      return { status: 'draw', userChoice, computerChoice };
  }
};
