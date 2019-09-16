import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export default (generateGame, description) => {
  const roundsCount = 3;
  console.log('Hello');
  console.log('Welcome to Brain Games!!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);

  const checkAnswer = (questionAndAnswer, countOfRounds) => {
    const pair = questionAndAnswer();
    if (countOfRounds === 0) {
      console.log(`Congratulation, ${name}`);
      return null;
    }
    console.log(`Question: ${car(pair)}`);
    const get = readlineSync.question('Your answer:');
    const rightAnswer = cdr(pair);
    if (String(get) !== String(rightAnswer)) {
      console.log(`${get} is wrong answer^-^ correct answer was ${rightAnswer}`);
      console.log(`Lets try again, ${name}`);
      return null;
    }
    console.log('correct!!!!!!');
    return checkAnswer(questionAndAnswer, countOfRounds - 1);
  };
  checkAnswer(generateGame, roundsCount);
};
