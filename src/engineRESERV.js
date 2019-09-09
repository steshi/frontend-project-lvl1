import readlineSync from 'readline-sync';
import { head, tail, isEmpty } from '@hexlet/pairs-data';

export const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const check = (rightAnswerList, questionList, describtion) => {
  console.log('Welcome to Brain Games!!');
  console.log(describtion);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);
  const work = (answers, questions) => {
    if (isEmpty(questions)) {
      const console1 = console.log(`Congratulation, ${name}`);
      return console1;
    }
    console.log(`Question: ${head(questions)}`);
    const get = readlineSync.question('Your answer:');
    const rightAnswer = head(answers);
    if (String(get) !== String(rightAnswer)) {
      console.log(`${get} is wrong answer^-^ correct answer was ${rightAnswer}`);
      const letsTry = console.log(`Lets try again, ${name}`);
      return letsTry;
    }
    console.log('correct!!!!!!');
    return work(tail(answers), tail(questions));
  };
  return work(rightAnswerList, questionList);
};
