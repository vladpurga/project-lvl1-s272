import readlineSync from 'readline-sync';

const countRounds = 3;

const playRounds = (game) => {
  for (let i = 0; i < countRounds; i += 1) {
    const nextRound = game();
    console.log(`Question: ${nextRound.question}`);
    const answer = readlineSync.question('Your answer? ');
    const correctAnswer = nextRound.answer;

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
  }

  return true;
};

const playGame = (game, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}`);
  console.log();
  const player = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${player}!`);
  console.log();

  const isWin = playRounds(game);
  if (isWin) {
    console.log(`Congratulations, ${player}!`);
  } else {
    console.log(`Let's try again, ${player}!`);
  }
};

export default playGame;

