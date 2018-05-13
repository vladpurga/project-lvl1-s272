// utils

const getRandomInt = (lower_, upper_) => {
  const lower = lower_ || 0;
  const upper = upper_ || 1;
  const min = Math.min(lower, upper);
  const max = Math.max(lower, upper) + 1;

  return min + Math.floor(Math.random() * Math.floor(max - min));
};

export default getRandomInt;
