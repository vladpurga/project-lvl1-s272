import readlineSync from 'readline-sync';

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
const isEven = num => num % 2 === 0;

const playGame = (game, description) => {
  console.log('Welcome to the Brain Games!');
  if (description !== undefined) {
    console.log(`${description}`);
  }

  const player = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${player}!`);

  if (game !== undefined) {
    console.log();
    const result = game();
    if (result) {
      console.log(`Congratulations, ${player}!`);
    } else {
      console.log(`Let's try again, ${player}!`);
    }
  }
};

const playBrainEven = (countQuestions) => {
  const description = 'Answer "yes" if number even otherwise answer "no".';

  const game = () => {
    for (let i = 0; i < countQuestions; i += 1) {
      const num = getRandomInt(100);
      console.log(`Question: ${num}`);
      const answer = readlineSync.question('Your answer? ');
      const correctAnswer = isEven(num) ? 'yes' : 'no';

      if (answer === correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        return false;
      }
    }
    return true;
  };

  playGame(game, description);
};

export { playGame, playBrainEven };

