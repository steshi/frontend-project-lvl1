import { cons } from '@hexlet/pairs';
import engine from '../engine';
import randomInRange from '../lib/utils';


const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let j = 2; j <= num / 2; j += 1) {
    if (num % j === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const num = randomInRange(1, 10);
  const question = num;
  const rightAnswer = isPrime(num) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => engine(generateQuestionAndAnswer, description);
