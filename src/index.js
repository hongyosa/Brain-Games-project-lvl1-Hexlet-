import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

export const getQnA = (question, answer) => cons(question, answer);
const getQuestion = pairQnA => car(pairQnA);
const getAnswer = pairQnA => cdr(pairQnA);

export const gameFlow = (description, getPairQnA) => {
  const amountOfRounds = 3;
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  console.log(`${description}`);
  for (let i = 1; i <= amountOfRounds; i += 1) {
    const pairQnA = getPairQnA();
    const question = getQuestion(pairQnA);
    console.log(`Question:  ${question}`);
    const answer = getAnswer(pairQnA);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.
      Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
