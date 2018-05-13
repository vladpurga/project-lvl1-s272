import playGame from '../engine';
import getRandomInt from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const game = () => {
  const guess = getRandomInt(100);
  const question = String(guess);
  const answer = isEven(guess) ? 'yes' : 'no';

  return { question, answer };
};

export default () => playGame(game, description);
