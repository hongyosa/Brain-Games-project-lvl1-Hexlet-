import { gameFlow, getQnA } from '..';
import { getRandomNumber } from '../lib';

const description = 'What number is missing in this progression?';
const progressionLength = 10;

const getProgressionEl = (begin, spacing, n) => begin + (spacing * (n - 1));

const getArithmeticProgression = (begin, spacing, length, miss) => {
  const iter = (counter, acc) => {
    if (counter > length) {
      return acc;
    }
    const currentPosition = counter === miss ? '..' : getProgressionEl(begin, spacing, counter);
    return iter(counter + 1, `${acc} ${currentPosition}`);
  };
  return iter(1, '');
};

const getProgressionTheGame = () => {
  const APBegin = getRandomNumber(1, 10);
  const APSpacing = getRandomNumber(1, 10);
  const APMissedPosition = getRandomNumber(1, progressionLength);
  const question = getArithmeticProgression(APBegin, APSpacing, progressionLength, APMissedPosition);
  const answer = getProgressionEl(APBegin, APSpacing, APMissedPosition);
  return getQnA(question, String(answer));
};

const launchProgressionTheGame = () => gameFlow(description, getProgressionTheGame);
export default launchProgressionTheGame;
