// Pre defined cache age values (in seconds)
exports.CONSTANTS = {
  TEN_SECONDS: 10,
  THIRTY_SECONDS: 30,
  ONE_MINUTE: 60,
  THIRTY_MINUTES: 1800,
  TWO_HOURS: 7200,
  FOUR_HOURS: 14400,
  ONE_DAY: 86400,
};

exports.getRandomArrayElement = (arr) => {
  min = 0;
  max = arr.length;
  return arr[Math.floor(Math.random() * (max - min) + min)]; // The maximum is inclusive and the minimum is inclusive
};