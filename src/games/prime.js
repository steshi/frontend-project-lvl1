import { cons } from '@hexlet/pairs';
import engine from '../engine';
import randomInRange from '../lib/utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let j = 2; j <= num / 2; j += 1) {
    if (num % j === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const question = randomInRange(2, 500);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => engine(generateQuestionAndAnswer, description);
