import { l } from '@hexlet/pairs-data';
import { check, randomInRange } from '../engine';

export default () => {
  const describtion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const func = (num) => {
    for (let j = 2; j < num; j += 1) {
      if (num % j === 0) {
        return 1;
      }
    }
    return 0;
  };

  const x1 = randomInRange(1, 3500);
  const question1 = `${x1}`;
  const rightAnswer1 = (func(x1) === 1) ? 'no' : 'yes';

  const x2 = randomInRange(1, 3500);
  const question2 = `${x2}`;
  const rightAnswer2 = (func(x2) === 1) ? 'no' : 'yes';

  const x3 = randomInRange(1, 3500);
  const question3 = `${x3}`;
  const rightAnswer3 = (func(x3) === 1) ? 'no' : 'yes';


  const questionList = l(question1, question2, question3);
  const rightAnswerList = l(rightAnswer1, rightAnswer2, rightAnswer3);
  check(rightAnswerList, questionList, describtion);
};
