export const randomNumberGenerator = (start, limit) =>
  Math.floor(Math.random() * limit + start);

export const findHpStats = (statsArr) =>
  statsArr.find((statObj) => statObj.stat.name === "hp");

export const transformValue = (weight) => Number((weight / 100).toFixed(2));

export const isCaptured = (pokemonArr, pokemonName) =>
  pokemonArr.some((pokemon) => pokemon.name === pokemonName);
