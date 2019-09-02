import { l } from '@hexlet/pairs-data';
import readlineSync from 'readline-sync';
import check from '../dvig';

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);

  const qu1 = 15;
  const need1 = ((qu1 % 2) === 0) ? 'yes' : 'no';
  const qu2 = 6;
  const need2 = ((qu2 % 2) === 0) ? 'yes' : 'no';
  const qu3 = 7;
  const need3 = ((qu3 % 2) === 0) ? 'yes' : 'no';

  const quList = l(qu1, qu2, qu3);
  const needList = l(need1, need2, need3);
  check(needList, name, quList);
};
