import { cons } from '@hexlet/pairs';
import engine from '../engine';
import randomInRange from '../lib/utils';

const description = 'What is the result of the expression?';
const operators = '+-*';

const generateQuestionAndAnswer = () => {
  const calculation = (str, x, y) => {
    switch (str) {
      case '+':
        return x + y;
      case '-':
        return x - y;
      default:
        return x * y;
    }
  };

  const randomOperator = operators[randomInRange(0, operators.length - 1)];
  const num1 = randomInRange(1, 100);
  const num2 = randomInRange(1, 100);
  const question = `${num1} ${randomOperator} ${num2}`;
  const rightAnswer = calculation(randomOperator, num1, num2);
  return cons(question, rightAnswer);
};

export default () => engine(generateQuestionAndAnswer, description);
