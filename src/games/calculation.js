import { cons } from '@hexlet/pairs';
import check from '../engine';
import randomInRange from '../lib/utils';

const description = 'What is the result of the expression?';

const generator = () => {
  const operators = '+-*';
  const calculation = (str, x, y) => {
    if (str === '+') {
      return (x + y);
    } if (str === '-') {
      return (x - y);
    } return x * y;
  };
  const randomOperator = operators[randomInRange(0, 2)];
  const num1 = randomInRange(1, 100);
  const num2 = randomInRange(1, 100);
  const question = `${num1} ${randomOperator} ${num2}`;
  const rightAnswer = calculation(randomOperator, num1, num2);
  return cons(question, rightAnswer);
};

export default () => check(generator, description);
