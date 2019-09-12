import { cons } from '@hexlet/pairs';
import check from '../engine';
import randomInRange from '../lib/utils';


const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let j = 2; j < num / 2; j += 1) {
    if (num % j === 0) {
      return 1;
    }
  }
  return 0;
};

const generator = () => {
  const num = randomInRange(1, 3500);
  const question = `${num}`;
  const rightAnswer = (isPrime(num) === 1) ? 'no' : 'yes';
  return cons(question, rightAnswer);
};

export default () => check(generator, description);
