
import { cons } from '@hexlet/pairs';
import { check, randomInRange } from '../engine';

const describtion = 'Answer "yes" if number even otherwise answer "no".';
const isEven = (num) => (((num % 2) === 0) ? 'yes' : 'no');

const pairGen = () => {
  const question = randomInRange(1, 20);
  const rightAnswer = isEven(question);
  return cons(question, rightAnswer);
};

export default () => check(pairGen, describtion);
