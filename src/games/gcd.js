import { cons } from '@hexlet/pairs';
import check from '../engine';
import randomInRange from '../lib/utils';

const description = 'Find the greatest common divisor of given numbers.';
const calculationGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calculationGCD(b, a % b);
};


const generator = () => {
  const num1 = randomInRange(1, 100);
  const num2 = randomInRange(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = calculationGCD(num1, num2);
  return cons(question, rightAnswer);
};

export default () => check(generator, description);
