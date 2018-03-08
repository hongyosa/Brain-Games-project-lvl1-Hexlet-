import { gameFlow, getQnA } from '..';
import { getRandomNumber } from '../lib';

const randomNumberOfThree = (Math.floor(Math.random() * 4));
const description = 'What is the result of the expression?';


const getCalcTheGame = () => {
  const firstOperand = getRandomNumber(1, 10);
  const secondOperand = getRandomNumber(1, 10);
  const randomOp = randomNumberOfThree;
  let question;
  let answer;
  if (randomOp === 1) {
    question = `${firstOperand} - ${secondOperand}`;
    answer = firstOperand - secondOperand;
  } else if (randomOp === 2) {
    question = `${firstOperand} * ${secondOperand}`;
    answer = firstOperand * secondOperand;
  } else {
    question = `${firstOperand} + ${secondOperand}`;
    answer = firstOperand + secondOperand;
  }
  return getQnA(question, String(answer));
};

const launchCalcTheGame = () => gameFlow(description, getCalcTheGame);
export default launchCalcTheGame;
