import playGame from '../engine';
import { getRandomRange } from '../utils';

const description = 'Balance the given number.';

const balance = (number) => {
  const digits = String(number).split('').map(Number).sort();
  const upper = digits.length - 1;

  if (digits[upper] - digits[0] <= 1) {
    return digits.join('');
  }
  digits[0] += 1;
  digits[upper] -= 1;

  return balance(digits.join(''));
};

const game = () => {
  const number = getRandomRange(100, 999);
  const question = `${number}`;
  const answer = String(balance(number));
  // console.log('correct answer: ', answer);

  return { question, answer };
};

export default () => playGame(game, description);
