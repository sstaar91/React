export const getLatestLottoDrwNo = () => {
  const startDate = new Date("2002-12-07").getTime();
  const currentDate = new Date().getTime();
  const diffInMilliseconds = currentDate - startDate;

  return Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 7)) + 1;
};

export const getLatestPensionDrwNo = () => {
  const startDate = new Date("2020-05-07").getTime();
  const currentDate = new Date().getTime();
  const diffInMilliseconds = currentDate - startDate;

  return Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 7)) + 1;
};

export const getDisplayThursday = (currentDate: Date) => {
  const targetDay = 4;
  const cutoffHour = 20;

  const currentDay = currentDate.getDay();
  const currentHour = currentDate.getHours();
  const displayDate = new Date(currentDate);

  if (currentDay === targetDay) {
    if (currentHour < cutoffHour) {
      displayDate.setDate(displayDate.getDate() - 7);
    }
  } else {
    const daysToLastThursday = (currentDay - targetDay + 7) % 7 || 7;
    displayDate.setDate(displayDate.getDate() - daysToLastThursday);
  }

  const year = displayDate.getFullYear();
  const month = String(displayDate.getMonth() + 1).padStart(2, "0");
  const day = String(displayDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
