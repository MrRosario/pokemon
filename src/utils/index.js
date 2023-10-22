export const randomNumberGenerator = (start, limit) =>
  Math.floor(Math.random() * limit + start);

export const findHpStats = (statsArr) =>
  statsArr.find((statObj) => statObj.stat.name === "hp");
