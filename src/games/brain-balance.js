import { gameFlow, getQnA } from '..';
import { getRandomNumber } from '../lib';

const description = 'Balance the given number.';

const getBalanced = (num) => {
  const digits = String(num).split('').sort((a, b) => a - b);
  const length = digits.length - 1;
  const firstDig = Number(digits[0]);
  const lastDig = Number(digits[length]);
  if (lastDig - firstDig <= 1) {
    return digits.join('');
  }
  digits[0] = firstDig + 1;
  digits[length] = lastDig - 1;
  const result = Number(digits.join(''));

  return getBalanced(result);
};

const getBalanceTheGame = () => {
  const question = getRandomNumber(10, 999);
  const answer = getBalanced(String(question));
  return getQnA(question, String(answer));
};

const launchBalanceTheGame = () => gameFlow(description, getBalanceTheGame);
export default launchBalanceTheGame;
