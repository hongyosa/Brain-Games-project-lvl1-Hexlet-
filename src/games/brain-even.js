import { gameFlow, getQnA } from '..';
import { getRandomNumber } from '../lib';


const description = 'Answer "yes" if number even otherwise answer "no".';
const getEvenTheGame = () => {
  const minNum = 1;
  const maxNum = 99;
  const question = getRandomNumber(minNum, maxNum);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return getQnA(question, answer);
};
const launchEvenTheGame = () => gameFlow(description, getEvenTheGame);
export default launchEvenTheGame;
