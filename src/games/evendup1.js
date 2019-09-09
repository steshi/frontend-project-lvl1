import { l, cons } from '@hexlet/pairs-data';
import { check, randomInRange } from '../engine';


const describtion = 'Answer "yes" if number even otherwise answer "no".';
// const isEven = (num) => (((num % 2) === 0) ? 'yes' : 'no');


const generator = () => {
  let list = l();
  const count = 5;
  const slepit = (x) => {
    if (x === 0) {
      return list;
    }
    const quest = randomInRange(1, 20);
    list = cons(quest, list);
    return slepit(x - 1);
  };
  return slepit(count);
};


const questionList = generator();
const rightAnswerList = l(2, 3, 4);
export default () => check(rightAnswerList, questionList, describtion);
