import { cons, car, cdr } from '@hexlet/pairs';
import engine from '../engine';
import randomInRange from '../lib/utils';

const description = 'What number is missing in the progression?';

const genProgressionHideElement = (startEl, stepEl, progressionLength) => {
  let result = '';
  const numberOfHiddenElement = randomInRange(1, progressionLength);
  let missedElement;
  const iter = (startElement, step, count) => {
    if (count === 0) {
      return cons(result, missedElement);
    }

    if (count === numberOfHiddenElement) {
      result = `${result} ..`;
      missedElement = startElement;
    } else {
      result = `${result} ${startElement}`;
    }
    return iter(startElement + step, step, count - 1);
  };
  return iter(startEl, stepEl, progressionLength);
};

const generateQuestionAndAnswer = () => {
  const progressionLength = 10;
  const step = randomInRange(1, 6);
  const firstElement = randomInRange(1, 5);
  const questionAndAnswer = genProgressionHideElement(firstElement, step, progressionLength);
  const question = `${car(questionAndAnswer)}`;
  const rightAnswer = cdr(questionAndAnswer);
  return cons(question, rightAnswer);
};

export default () => engine(generateQuestionAndAnswer, description);
