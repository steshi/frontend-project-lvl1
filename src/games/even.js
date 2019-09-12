import { cons } from '@hexlet/pairs';
import check from '../engine';
import randomInRange from '../lib/utils';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = (num) => ((num % 2) === 0);

const generator = () => {
  const question = randomInRange(1, 20);
  const rightAnswer = (isEven(question) === true) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => check(generator, description);
