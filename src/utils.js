// utils

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const getRandomRange = (lower, upper) => {
  const min = Math.min(lower, upper);
  const max = Math.max(lower, upper) + 1;

  return min + Math.floor(Math.random() * Math.floor(max - min));
};

export { getRandomInt, getRandomRange };
