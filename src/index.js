import readlineSync from 'readline-sync';

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
const isEven = number => number % 2 === 0;

const playGame = (game, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}`);

  const player = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${player}!`);

  console.log();
  const result = game();
  if (result) {
    console.log(`Congratulations, ${player}!`);
  } else {
    console.log(`Let's try again, ${player}!`);
  }
};

const gameBrainEven = () => {
  const countQuestions = 3;
  for (let i = 0; i < countQuestions; i += 1) {
    const guess = getRandomInt(100);
    console.log(`Question: ${guess}`);
    const answer = readlineSync.question('Your answer? ');
    const correctAnswer = isEven(guess) ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
  }
  return true;
};

const playBrainEven = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';

  playGame(gameBrainEven, description);
};

const welcome = () => {
  console.log('Welcome to the Brain Games!');

  const player = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${player}!`);
};

export { welcome, playBrainEven };

