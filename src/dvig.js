import readlineSync from 'readline-sync';
import { head, tail, isEmpty } from '@hexlet/pairs-data';


const check = (needList, name, quList) => {
  if (isEmpty(quList)) {
    const console1 = console.log(`Congratulation, ${name}`);
    return console1;
  }
  console.log(`Question: ${head(quList)}`);
  const get = readlineSync.question('Your answer:');
  const need = head(needList);
  const console2 = () => {
    console.log(`${get} is wrong answer^-^ correct answer was ${need}`);
    console.log(`Lets try again, ${name}`);
  };
  if (String(get) !== String(need)) {
    return console2;
  }
  console.log('correct!!!!!!');
  return check(tail(needList), name, tail(quList));
};

export default check;
