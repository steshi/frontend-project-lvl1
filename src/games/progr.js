import { l } from '@hexlet/pairs-data';
import { cons, car, cdr } from '@hexlet/pairs';
import { check, randomInRange } from '../engine';

let result = '';
let randomElement = randomInRange(1, 10);
let missedElement;

const makeProgressionString = (startElement, stepEl, count) => {
  if (count === 0) {
    const finalResult = cons(result, missedElement);
    result = '';
    randomElement = randomInRange(1, 10);
    return finalResult;
  }

  if (count === randomElement) {
    result = `${result} ..`;
    missedElement = startElement;
  } else {
    result = `${result} ${startElement}`;
  }

  return makeProgressionString(startElement + stepEl, stepEl, count - 1);
};


export default () => {
  const describtion = 'What number is missing in the progression?';
  const countEl = 10;

  const step1 = randomInRange(5, 10);
  const startElement1 = randomInRange(1, 5);
  const pair1 = makeProgressionString(startElement1, step1, countEl);
  const question1 = `${car(pair1)}`;
  const rightAnswer1 = cdr(pair1);

  const step2 = randomInRange(5, 10);
  const startElement2 = randomInRange(1, 5);
  const pair2 = makeProgressionString(startElement2, step2, countEl);
  const question2 = `${car(pair2)}`;
  const rightAnswer2 = cdr(pair2);

  const step3 = randomInRange(5, 10);
  const startElement3 = randomInRange(1, 5);
  const pair3 = makeProgressionString(startElement3, step3, countEl);
  const question3 = `${car(pair3)}`;
  const rightAnswer3 = cdr(pair3);

  const questionList = l(question1, question2, question3);
  const rightAnswerList = l(rightAnswer1, rightAnswer2, rightAnswer3);
  check(rightAnswerList, questionList, describtion);
};
