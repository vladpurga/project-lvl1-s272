import readlineSync from 'readline-sync';
import { getRandomInt, checkAnswers, isEven } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const game = () => {
  const countQuestions = 3;
  for (let i = 0; i < countQuestions; i += 1) {
    const guess = getRandomInt(100);
    console.log(`Question: ${guess}`);
    const answer = readlineSync.question('Your answer? ');
    const correctAnswer = isEven(guess) ? 'yes' : 'no';

    if (!checkAnswers(answer, correctAnswer)) {
      return false;
    }
  }
  return true;
};

export { game, description };
