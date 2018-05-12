import playGame from '../engine';
import { getRandomInt } from '../utils';

const description = 'What is the result of the expression?';

const evalCalcExpression = (operator, operand1, operand2) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      break;
  }
  return result;
};

const game = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(operators.length)];
  const operand1 = getRandomInt(100);
  const operand2 = getRandomInt(100);
  const question = `${operand1} ${operator} ${operand2}`;
  const answer = String(evalCalcExpression(operator, operand1, operand2));

  return { question, answer };
};

export default () => playGame(game, description);
