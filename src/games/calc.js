import { l } from '@hexlet/pairs-data';
import readlineSync from 'readline-sync';
import check from '../dvig';

const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);
  const operators = '+-*';

  const oper1 = operators[randomInRange(0, 2)];
  const x1 = randomInRange(1, 100);
  const y1 = randomInRange(1, 100);
  const qu1 = `${x1} ${oper1} ${y1}`;
  let need1;
  switch (oper1) {
    case '+':
      need1 = x1 + y1;
      break;
    case '-':
      need1 = x1 - y1;
      break;
    default:
      need1 = x1 * y1;
  }


  const oper2 = operators[randomInRange(0, 2)];
  const x2 = randomInRange(1, 100);
  const y2 = randomInRange(1, 100);
  const qu2 = `${x2} ${oper2} ${y2}`;
  let need2;
  switch (oper2) {
    case '+':
      need2 = x2 + y2;
      break;
    case '-':
      need2 = x2 - y2;
      break;
    default:
      need2 = x2 * y2;
  }

  const oper3 = operators[randomInRange(0, 2)];
  const x3 = randomInRange(1, 100);
  const y3 = randomInRange(1, 100);
  const qu3 = `${x3} ${oper3} ${y3}`;
  let need3;
  switch (oper3) {
    case '+':
      need3 = x3 + y3;
      break;
    case '-':
      need3 = x3 - y3;
      break;
    default:
      need3 = x3 * y3;
  }

  const quList = l(qu1, qu2, qu3);
  const needList = l(need1, need2, need3);
  check(needList, name, quList);
};
