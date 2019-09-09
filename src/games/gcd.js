import { l } from '@hexlet/pairs-data';
import { check, randomInRange } from '../engine';

export default () => {
  const describtion = 'Find the greatest common divisor of given numbers.';

  const rightAnswer = (a, b) => {
    if (b === 0) {
      return a;
    }
    return rightAnswer(b, a % b);
  };

  const x1 = randomInRange(1, 100);
  const y1 = randomInRange(1, 100);
  const question1 = `${x1} ${y1}`;
  const rightAnswer1 = rightAnswer(x1, y1);

  const x2 = randomInRange(1, 100);
  const y2 = randomInRange(1, 100);
  const question2 = `${x2} ${y2}`;
  const rightAnswer2 = rightAnswer(x2, y2);

  const x3 = randomInRange(1, 100);
  const y3 = randomInRange(1, 100);
  const question3 = `${x3} ${y3}`;
  const rightAnswer3 = rightAnswer(x3, y3);

  const questionList = l(question1, question2, question3);
  const rightAnswerList = l(rightAnswer1, rightAnswer2, rightAnswer3);
  check(rightAnswerList, questionList, describtion);
};
