import readlineSync from 'readline-sync';
import { head, tail, isEmpty } from '@hexlet/pairs-data';

const check = (needList, name, quList) => {
  if (isEmpty(quList)) {
    console.log(`Congratulation, ${name}`);
  } else {
    console.log(`Question: ${head(quList)}`);
    const get = readlineSync.question('Your answer:');
    const need = head(needList);
    if (String(get) !== String(need)) {
      console.log(`${get} is wrong answer^-^ correct answer was ${need}`);
      console.log(`Lets try again, ${name}`);
    } else {
      console.log('correct!!!!!!');
      return check(tail(needList), name, tail(quList));
    }
  }
};

export default check;
