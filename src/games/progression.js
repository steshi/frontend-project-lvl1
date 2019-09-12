import { cons, car, cdr } from '@hexlet/pairs';
import check from '../engine';
import randomInRange from '../lib/utils';

const description = 'What number is missing in the progression?';

const generateProgression = (a, b, c) => {
  let result = '';
  const randomElement = randomInRange(1, 7);
  let missedElement;
  const iteration = (startElement, step, count) => {
    if (count === 0) {
      return cons(result, missedElement);
    }

    if (count === randomElement) {
      result = `${result} ..`;
      missedElement = startElement;
    } else {
      result = `${result} ${startElement}`;
    }
    return iteration(startElement + step, step, count - 1);
  };
  return iteration(a, b, c);
};

const generator = () => {
  const countOfElements = 7;
  const step = randomInRange(1, 7);
  const startElement = randomInRange(1, 5);
  const progressionAndMissedElement = generateProgression(startElement, step, countOfElements);
  const question = `${car(progressionAndMissedElement)}`;
  const rightAnswer = cdr(progressionAndMissedElement);
  return cons(question, rightAnswer);
};

export default () => check(generator, description);
