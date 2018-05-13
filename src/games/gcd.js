import playGame from '../engine';
import getRandomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (a === 0) {
    return 1;
  } else if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

const game = () => {
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);
  const question = `${number1} ${number2}`;
  const answer = String(gcd(number1, number2));

  return { question, answer };
};

export default () => playGame(game, description);
