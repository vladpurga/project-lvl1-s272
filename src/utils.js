// utils

const getRandomInt = (lower = 0, upper = 1) => {
  const min = Math.min(lower, upper);
  const max = Math.max(lower, upper) + 1;

  return min + Math.floor(Math.random() * Math.floor(max - min));
};

export default getRandomInt;
