import { l } from '@hexlet/pairs-data';
import readlineSync from 'readline-sync';
import check from '../dvig';

const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);

  const operators = '+-*';
  const need = (str, x, y) => {
    if (str === '+') {
      return (x + y);
    } if (str === '+') {
      return (x - y);
    } return x * y;
  };

  const oper1 = operators[randomInRange(0, 2)];
  const x1 = randomInRange(1, 100);
  const y1 = randomInRange(1, 100);
  const qu1 = `${x1} ${oper1} ${y1}`;
  const need1 = need(oper1, x1, y1);


  const oper2 = operators[randomInRange(0, 2)];
  const x2 = randomInRange(1, 100);
  const y2 = randomInRange(1, 100);
  const qu2 = `${x2} ${oper2} ${y2}`;
  const need2 = need(oper2, x2, y2);

  const oper3 = operators[randomInRange(0, 2)];
  const x3 = randomInRange(1, 100);
  const y3 = randomInRange(1, 100);
  const qu3 = `${x3} ${oper3} ${y3}`;
  const need3 = need(oper3, x3, y3);

  const quList = l(qu1, qu2, qu3);
  const needList = l(need1, need2, need3);
  check(needList, name, quList);
};
