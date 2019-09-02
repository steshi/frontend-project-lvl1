import {
  l,
} from '@hexlet/pairs-data';
import {
  cons, car, cdr,
} from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import check from '../dvig';

const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
let result = '';
let randomElement = randomInRange(1, 10);
let element;

const string = (startEl, stepEl, count) => {
  if (count === 0) {
    const bu = cons(result, element);
    result = '';
    randomElement = randomInRange(1, 10);
    return bu;
  }

  if (count === randomElement) {
    result = `${result} ..`;
    element = startEl;
  } else {
    result = `${result} ${startEl}`;
  }

  return string(startEl + stepEl, stepEl, count - 1);
};


export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);


  const countEl = 10;

  const step1 = randomInRange(5, 10);
  const startEl1 = randomInRange(1, 5);
  const pair1 = string(startEl1, step1, countEl);
  const qu1 = `${car(pair1)}`;
  const need1 = cdr(pair1);

  const step2 = randomInRange(5, 10);
  const startEl2 = randomInRange(1, 5);
  const pair2 = string(startEl2, step2, countEl);
  const qu2 = `${car(pair2)}`;
  const need2 = cdr(pair2);

  const step3 = randomInRange(5, 10);
  const startEl3 = randomInRange(1, 5);
  const pair3 = string(startEl3, step3, countEl);
  const qu3 = `${car(pair3)}`;
  const need3 = cdr(pair3);

  const quList = l(qu1, qu2, qu3);
  const needList = l(need1, need2, need3);
  check(needList, name, quList);
};
