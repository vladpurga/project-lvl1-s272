import readlineSync from 'readline-sync';
import { getRandomInt, checkAnswers } from '../utils';
import { playGame } from '..';

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
  const countQuestions = 3;
  for (let i = 0; i < countQuestions; i += 1) {
    const number1 = getRandomInt(100);
    const number2 = getRandomInt(100);
    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer? ');
    const correctAnswer = gcd(number1, number2);

    if (!checkAnswers(Number(answer), correctAnswer)) {
      return false;
    }
  }
  return true;
};

export default () => playGame(game, description);
