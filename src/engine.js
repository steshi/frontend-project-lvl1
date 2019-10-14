import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;

export default (generateGame, description) => {
  console.log('Hello');
  console.log('Welcome to Brain Games!!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}`);

  const iter = (questionAndAnswer, countOfRound) => {
    const questionAnswer = questionAndAnswer();
    if (countOfRound === 0) {
      console.log(`Congratulation, ${userName}`);
      return;
    }
    const question = car(questionAnswer);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer:');
    const rightAnswer = cdr(questionAnswer);
    if (userAnswer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer^-^ correct answer was ${rightAnswer}\nLets try again, ${userName}`);
      return;
    }
    console.log('correct!!!!!!');
    return iter(questionAndAnswer, countOfRound - 1);
  };
  iter(generateGame, roundsCount);
};
