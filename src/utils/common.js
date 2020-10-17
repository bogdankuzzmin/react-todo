export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomElement = (arr) => arr[(Math.random() * arr.length) | 0];

export const capitalizeFirstLetter = (word) => word[0].toUpperCase() + word.slice(1);