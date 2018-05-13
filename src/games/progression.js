import { cons, car, cdr, isPair } from 'hexlet-pairs';

import playGame from '../engine';
import getRandomInt from '../utils';

const description = 'What number is missing in this progression?';

const randomProgression = (start, step, length) => {
  let guess;
  const guessIndex = getRandomInt(length);

  const iter = (count, acc) => {
    const item = start + (step * count);
    if (count === guessIndex) {
      guess = item;
    }
    if (count > length) {
      return { progression: acc, guess };
    }
    return iter(count + 1, cons(item, acc));
  };

  return iter(1, cons(start, null));
};

const toQuestion = (progression, guess) => {
  const iter = (tail, acc) => {
    if (isPair(tail)) {
      const item = car(tail);
      const newAcc = (item === guess) ? `.. ${acc}` : `${item} ${acc}`;
      return iter(cdr(tail), newAcc);
    }
    return acc;
  };

  return iter(progression, '');
};

const length = 10;

const game = () => {
  const start = getRandomInt(1, 100);
  const step = getRandomInt(2, 6);
  const { progression, guess } = randomProgression(start, step, length);
  const question = toQuestion(progression, guess);
  const answer = String(guess);
  // console.log(toString(progression));

  return { question, answer };
};

export default () => playGame(game, description);
