import { cons } from '@hexlet/pairs';
import engine from '../engine';
import randomInRange from '../lib/utils';

const description = 'Find the greatest common divisor of given numbers.';
const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const generateQuestionAndAnswer = () => {
  const num1 = randomInRange(1, 100);
  const num2 = randomInRange(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = String(findGcd(num1, num2));
  return cons(question, rightAnswer);
};

export default () => engine(generateQuestionAndAnswer, description);
