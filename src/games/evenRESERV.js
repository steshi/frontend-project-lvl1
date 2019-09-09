import { l } from '@hexlet/pairs-data';
import { check, randomInRange } from '../engine';

export default () => {
  const describtion = 'Answer "yes" if number even otherwise answer "no".';
  const isEven = (num) => (((num % 2) === 0) ? 'yes' : 'no');


  const question1 = randomInRange(1, 20);
  const rightAnswer1 = isEven(question1);
  const question2 = randomInRange(1, 20);
  const rightAnswer2 = isEven(question2);
  const question3 = randomInRange(1, 20);
  const rightAnswer3 = isEven(question3);

  const questionList = l(question1, question2, question3);
  const rightAnswerList = l(rightAnswer1, rightAnswer2, rightAnswer3);
  check(rightAnswerList, questionList, describtion);
};
