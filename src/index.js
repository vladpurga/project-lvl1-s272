import readlineSync from 'readline-sync';

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
const isEven = number => number % 2 === 0;
const checkAnswers = (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const gameBrainEven = () => {
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

const evalCalcExpression = (operator, operand1, operand2) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = Number(operand1) + Number(operand2);
      break;
    case '-':
      result = Number(operand1) - Number(operand2);
      break;
    case '*':
      result = Number(operand1) * Number(operand2);
      break;
    default:
      break;
  }
  return result;
};

const gameBrainCalc = () => {
  const operators = ['+', '-', '*'];
  for (let i = 0; i < operators.length; i += 1) {
    const operator = operators[i];
    const operand1 = getRandomInt(100);
    const operand2 = getRandomInt(100);
    const expression = `${operand1} ${operator} ${operand2}`;
    console.log(`Question: ${expression} `);
    const answer = readlineSync.question('Your answer? ');
    const correctAnswer = evalCalcExpression(operator, operand1, operand2);

    if (!checkAnswers(Number(answer), correctAnswer)) {
      return false;
    }
  }
  return true;
};

const playGame = (game, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}`);

  const player = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${player}!`);

  console.log();
  const result = game();
  if (result) {
    console.log(`Congratulations, ${player}!`);
  } else {
    console.log(`Let's try again, ${player}!`);
  }
};

const playBrainEven = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';

  playGame(gameBrainEven, description);
};

const playBrainCalc = () => {
  const description = 'What is the result of the expression?';

  playGame(gameBrainCalc, description);
};

const welcome = () => {
  console.log('Welcome to the Brain Games!');

  const player = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${player}!`);
};

export { welcome, playBrainEven, playBrainCalc };

