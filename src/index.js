import readlineSync from 'readline-sync';

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

const welcome = () => {
  console.log('Welcome to the Brain Games!');

  const player = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${player}!`);
};

export { welcome, playGame };

