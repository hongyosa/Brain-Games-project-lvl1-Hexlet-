import { gameFlow, getQnA } from '..';
import { getRandomNumber } from '../lib';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return getGreatestCommonDivisor(b, a % b);
};

const getGcdTheGame = () => {
  const firstOperand = getRandomNumber(1, 50);
  const secondOperand = getRandomNumber(1, 50);
  const question = `${firstOperand} ${secondOperand}`;
  const answer = getGreatestCommonDivisor(firstOperand, secondOperand);
  return getQnA(question, String(answer));
};

const launchGcdTheGame = () => gameFlow(description, getGcdTheGame);
export default launchGcdTheGame;
