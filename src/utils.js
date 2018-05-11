// utils

export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

export const isEven = number => number % 2 === 0;

export const checkAnswers = (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

