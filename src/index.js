import readlineSync from 'readline-sync';

const playRounds = (game) => {
  const countRounds = 3;

  for (let i = 0; i < countRounds; i += 1) {
    const nextRound = game();
    console.log(`Question: ${nextRound.question}`);
    const answer = readlineSync.question('Your answer? ');
    const correctAnswer = String(nextRound.answer);

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

  const result = playRounds(game);
  if (result) {
    console.log(`Congratulations, ${player}!`);
  } else {
    console.log(`Let's try again, ${player}!`);
  }
};

const welcome = () => {
  console.log('Welcome to the Brain Games!');

  const player = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${player}!`);
};

export { welcome, playGame };

