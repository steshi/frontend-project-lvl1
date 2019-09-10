import { cons } from '@hexlet/pairs';
import { check, randomInRange } from '../engine';

const describtion = 'Find the greatest common divisor of given numbers.';
const gcdCalc = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcdCalc(b, a % b);
};


const pairGen = () => {
  const num1 = randomInRange(1, 100);
  const num2 = randomInRange(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = gcdCalc(num1, num2);
  return cons(question, rightAnswer);
};

export default () => check(pairGen, describtion);
