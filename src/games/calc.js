import { l } from '@hexlet/pairs-data';
import { check, randomInRange } from '../engine';

export default () => {
  const describtion = 'What is the result of the expression?';

  const operators = '+-*';
  const rightAnswer = (str, x, y) => {
    if (str === '+') {
      return (x + y);
    } if (str === '+') {
      return (x - y);
    } return x * y;
  };
  const randomOperator = operators[randomInRange(0, 2)];

  const operator1 = randomOperator;
  const x1 = randomInRange(1, 100);
  const y1 = randomInRange(1, 100);
  const question1 = `${x1} ${operator1} ${y1}`;
  const rightAnswer1 = rightAnswer(operator1, x1, y1);


  const operator2 = randomOperator;
  const x2 = randomInRange(1, 100);
  const y2 = randomInRange(1, 100);
  const question2 = `${x2} ${operator2} ${y2}`;
  const rightAnswer2 = rightAnswer(operator2, x2, y2);

  const operator3 = randomOperator;
  const x3 = randomInRange(1, 100);
  const y3 = randomInRange(1, 100);
  const question3 = `${x3} ${operator3} ${y3}`;
  const rightAnswer3 = rightAnswer(operator3, x3, y3);

  const questionList = l(question1, question2, question3);
  const rightAnswerList = l(rightAnswer1, rightAnswer2, rightAnswer3);
  check(rightAnswerList, questionList, describtion);
};
