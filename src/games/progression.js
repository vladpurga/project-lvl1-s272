import { cons, car, cdr, isPair } from 'hexlet-pairs';

import playGame from '../engine';
import { getRandomRange } from '../utils';

const description = 'What number is missing in this progression?';

const randomProgression = (start, step, length) => {
  const iter = (count, acc) => {
    if (count > length) {
      return acc;
    }
    const item = start + (step * count);
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

const getItem = (progression, index) => {
  const iter = (tail, acc) => {
    if (acc === index) {
      return car(tail);
    }
    if (isPair(tail)) {
      return iter(cdr(tail), acc + 1);
    }
    return null;
  };

  return iter(progression, 1);
};

const length = 10;

const game = () => {
  const start = getRandomRange(1, 100);
  const step = getRandomRange(2, 6);
  const progression = randomProgression(start, step, length);
  const index = getRandomRange(2, length);
  const guess = getItem(progression, index);
  const question = toQuestion(progression, guess);
  const answer = String(guess);
  // console.log(toString(progression));

  return { question, answer };
};

export default () => playGame(game, description);
