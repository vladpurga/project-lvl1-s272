import playGame from '../engine';
import getRandomInt from '../utils';

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

const operators = ['+', '-', '*'];

const game = () => {
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const operand1 = getRandomInt(100);
  const operand2 = getRandomInt(100);
  const question = `${operand1} ${operator} ${operand2}`;
  const answer = String(evalCalcExpression(operator, operand1, operand2));

  return { question, answer };
};

export default () => playGame(game, description);
