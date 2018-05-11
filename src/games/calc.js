import readlineSync from 'readline-sync';
import { getRandomInt, checkAnswers } from '../utils';

const description = 'What is the result of the expression?';

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

const game = () => {
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

export { game, description };
