export const getLatestLottoDrwNo = () => {
  const startDate = new Date("2002-12-07").getTime();
  const currentDate = new Date().getTime();
  const diffInMilliseconds = currentDate - startDate;

  return Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 7)) + 1;
};
