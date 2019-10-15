import { cons, car, cdr } from '@hexlet/pairs';
import engine from '../engine';
import randomInRange from '../lib/utils';

const description = 'What number is missing in the progression?';

const generateQuestion = (startEl, step, length, hiddenElementIndex) => {
  let result = '';
  let missedElement;
  const iter = (startElement, count) => {
    if (count === 0) {
      return cons(result, missedElement);
    }

    if (count === hiddenElementIndex) {
      result = (result === '') ? `${result}..` : `${result} ..`;
      missedElement = startElement;
    } else {
      result = (result === '') ? `${result}${startElement}` : `${result} ${startElement}`;
    }
    return iter(startElement + step, step, count - 1);
  };

  return iter(startEl, step, length);
};

const length = 10;

const generateQuestionAndAnswer = () => {
  const step = randomInRange(1, 6);
  const firstElement = randomInRange(1, 5);
  const hiddenElementIndex = randomInRange(1, length);
  const questionAndAnswer = generateQuestion(firstElement, step, length, hiddenElementIndex);
  const question = car(questionAndAnswer);
  const rightAnswer = String(cdr(questionAndAnswer));
  return cons(question, rightAnswer);
};

export default () => engine(generateQuestionAndAnswer, description);
