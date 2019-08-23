import readlineSync from 'readline-sync';

export const bgame = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);
};

export const even = () => {
  const wrong = 'is wrong answer ;(. Correct answer was';
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);
  console.log('Question: 15');
  const ask1 = readlineSync.question('Your answer:');
  if (ask1 !== 'no') {
    console.log(`${ask1} ${wrong} "no"`);
    console.log(`Let's try again,${name}`);
  } else {
    console.log('Correct!');
    console.log('Question: 6');
    const ask2 = readlineSync.question('Your answer:');
    if (ask2 !== 'yes') {
      console.log(`${ask2} ${wrong} "yes"`);
      console.log(`Let's try again,${name}`);
    } else {
      console.log('Correct!');
      console.log('Question: 7');
      const ask3 = readlineSync.question('Your answer:');
      if (ask3 !== 'no') {
        console.log(`${ask3} ${wrong} "yes"`);
        console.log(`Let's try again,${name}`);
      } else {
        console.log(`Congratulations,${name}!`);
      }
    }
  }
};
