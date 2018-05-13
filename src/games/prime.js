import playGame from '../engine';
import getRandomInt from '../utils';

const description = 'Answer "yes" if number prime otherwise answer "no".';

const isPrime = (number) => {
  if (number % 2 === 0) {
    return number === 2;
  }

  const maxDivisor = Math.ceil(Math.sqrt(number));

  const check = (divisor) => {
    if (divisor > maxDivisor) {
      return true;
    }
    if (number % divisor === 0) {
      return false;
    }
    return check(divisor + 2);
  };

  return check(3);
};

const game = () => {
  const guess = getRandomInt(100);
  const question = String(guess);
  const answer = isPrime(guess) ? 'yes' : 'no';

  return { question, answer };
};

export default () => playGame(game, description);
