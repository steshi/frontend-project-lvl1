import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const check = (pairGen, describtion) => {
  const countOfRounds = 5;
  console.log('Hello');
  console.log('Welcome to Brain Games!!');
  console.log(describtion);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);

  const work = (func, countOfRoundss) => {
    const pair = func();
    if (countOfRoundss === 0) {
      const console1 = console.log(`Congratulation, ${name}`);
      return console1;
    }
    console.log(`Question: ${car(pair)}`);
    const get = readlineSync.question('Your answer:');
    const rightAnswer = cdr(pair);
    if (String(get) !== String(rightAnswer)) {
      console.log(`${get} is wrong answer^-^ correct answer was ${rightAnswer}`);
      const letsTry = console.log(`Lets try again, ${name}`);
      return letsTry;
    }
    console.log('correct!!!!!!');
    return work(func, countOfRoundss - 1);
  };
  work(pairGen, countOfRounds);
};
