import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export default (generateGame, description) => {
  const roundsCount = 3;
  console.log('Hello');
  console.log('Welcome to Brain Games!!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}`);

  const checkAnswer = (questionAndAnswer, countOfRound) => {
    const questionAnswer = questionAndAnswer();
    if (countOfRound === 0) {
      const congratulation = console.log(`Congratulation, ${userName}`);
      return congratulation;
    }
    console.log(`Question: ${car(questionAnswer)}`);
    const userAnswer = readlineSync.question('Your answer:');
    const rightAnswer = cdr(questionAnswer);
    if (userAnswer !== rightAnswer) {
      const wrongAnswer = console.log(`${userAnswer} is wrong answer^-^ correct answer was ${rightAnswer}\nLets try again, ${userName}`);
      return wrongAnswer;
    }
    console.log('correct!!!!!!');
    return checkAnswer(questionAndAnswer, countOfRound - 1);
  };
  checkAnswer(generateGame, roundsCount);
};
