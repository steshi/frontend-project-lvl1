import { l } from '@hexlet/pairs-data';
import readlineSync from 'readline-sync';
import check from '../dvig';

const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);

  const func = (num) => {
    for (let j = 2; j < num; j += 1) {
      if (num % j === 0) {
        return 1;
      }
    }
    return 0;
  };

  const x1 = randomInRange(1, 3500);
  const qu1 = `${x1}`;
  const need1 = (func(x1) === 1) ? 'no' : 'yes';

  const x2 = randomInRange(1, 3500);
  const qu2 = `${x2}`;
  const need2 = (func(x2) === 1) ? 'no' : 'yes';

  const x3 = randomInRange(1, 3500);
  const qu3 = `${x3}`;
  const need3 = (func(x3) === 1) ? 'no' : 'yes';


  const quList = l(qu1, qu2, qu3);
  const needList = l(need1, need2, need3);
  check(needList, name, quList);
};
