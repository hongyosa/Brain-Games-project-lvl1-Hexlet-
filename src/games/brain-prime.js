import { gameFlow, getQnA } from '..';
import { getRandomNumber } from '../lib';

const description = 'Is this number prime?';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeTheGame = () => {
  const question = getRandomNumber(1, 99);
  const answer = isPrime(question) ? 'yes' : 'no';
  return getQnA(question, answer);
};

const launchPrimeTheGame = () => gameFlow(description, getPrimeTheGame);
export default launchPrimeTheGame;
