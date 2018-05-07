import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!\n');

  const buddy = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${buddy}!`);
};

export default welcome;
