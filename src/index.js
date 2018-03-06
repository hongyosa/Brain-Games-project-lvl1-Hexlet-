import readlineSync from 'readline-sync';

const introduce = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!\n`);
};
export default introduce;
