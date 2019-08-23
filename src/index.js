import readlineSync from 'readline-sync';

const bgame = () => {
  const name = readlineSync.question('What is your name? ');
  console.log(`nice to meet you ${name}`);
};

export default bgame;
