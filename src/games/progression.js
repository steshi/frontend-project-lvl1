import { cons } from '@hexlet/pairs';
import engine from '../engine';
import randomInRange from '../lib/utils';

const description = 'What number is missing in the progression?';

const length = 7;

const generateQuestionAndAnswer = () => {
  const step = randomInRange(1, 6);
  const firstElement = randomInRange(1, 5);
  const hiddenElementIndex = randomInRange(1, length);
  let question = '';
  const rightAnswer = String(firstElement + step * hiddenElementIndex);
  for (let i = 0; i <= length; i += 1) {
    question = (i === hiddenElementIndex) ? `${question} ..` : `${question} ${firstElement + step * i}`;
  }
  return cons(question.trim(), rightAnswer);
};

export default () => engine(generateQuestionAndAnswer, description);
