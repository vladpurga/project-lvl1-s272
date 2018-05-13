import playGame from '../engine';
import getRandomInt from '../utils';

const description = 'Balance the given number.';

// TODO: fp-style
const balance = (number) => {
  let digits = String(number).split('').map(Number).sort();
  const upper = digits.length - 1;

  while (digits[upper] - digits[0] > 1) {
    digits[0] += 1;
    digits[upper] -= 1;
    digits = digits.sort();
  }

  return Number(digits.join(''));
};

const game = () => {
  const number = getRandomInt(100, 999);
  const question = `${number}`;
  const answer = String(balance(number));
  // console.log('correct answer: ', answer);

  return { question, answer };
};

export default () => playGame(game, description);
