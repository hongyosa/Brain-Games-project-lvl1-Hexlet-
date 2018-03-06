import readlineSync from 'readline-sync';
import getUserName from '..';


const description = 'Answer "yes" if number even otherwise answer "no".';
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min));
const getUserAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const launchEvenTheGame = () => {
  const minNum = 1;
  const maxNum = 99;
  const amountOfGames = 3;
  const userName = getUserName();
  console.log(description);
  for (let i = 1; i <= amountOfGames; i += 1) {
    const randomNum = getRandomNumber(minNum, maxNum);
    console.log(`Question: ${randomNum}`);
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
    const userAnswer = getUserAnswer();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
      Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default launchEvenTheGame;
