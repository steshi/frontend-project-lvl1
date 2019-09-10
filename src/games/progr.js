import { cons, car, cdr } from '@hexlet/pairs';
import { check, randomInRange } from '../engine';

const describtion = 'What number is missing in the progression?';

const genProgressionString = (a, b, c) => {
  let result = '';
  const randomElement = randomInRange(1, 7);
  let missedElement;
  const iter = (startElement, stepEl, count) => {
    if (count === 0) {
      return cons(result, missedElement);
    }

    if (count === randomElement) {
      result = `${result} ..`;
      missedElement = startElement;
    } else {
      result = `${result} ${startElement}`;
    }
    return iter(startElement + stepEl, stepEl, count - 1);
  };
  return iter(a, b, c);
};

const pairGen = () => {
  const countEl = 7;
  const step = randomInRange(1, 7);
  const startElement = randomInRange(1, 5);
  const progressionAndMissedEl = genProgressionString(startElement, step, countEl);
  const question = `${car(progressionAndMissedEl)}`;
  const rightAnswer = cdr(progressionAndMissedEl);
  return cons(question, rightAnswer);
};

export default () => check(pairGen, describtion);
