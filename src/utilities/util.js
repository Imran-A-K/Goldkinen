export function getRandomDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };

  const startYear = 2000;
  const endYear = new Date().getFullYear();

  const randomYear =
    Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;

  const randomMonthIndex = Math.floor(Math.random() * 12);
  const randomMonth = months[randomMonthIndex];

  if (
    randomMonth === "February" &&
    ((randomYear % 4 === 0 && randomYear % 100 !== 0) || randomYear % 400 === 0)
  ) {
    daysInMonth["February"] = 29;
  }

  const randomDay = Math.floor(Math.random() * daysInMonth[randomMonth]) + 1;

  const suffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${randomDay}${suffix(randomDay)} ${randomMonth}, ${randomYear}`;
}

export function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function wait(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
