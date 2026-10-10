/** Example 4: Chaining map and filter */

const data = [
  { country: 'France', population: 67 },
  { country: 'Germany', population: 83 },
  { country: 'Spain', population: 47 },
  { country: 'Poland', population: 38 },
];

// Filter large countries, then extract names
const largeCountryNames = data
  .filter((d) => {
    return d.population > 50;
  })
  .map((d) => {
    return d.country;
  });

console.log(largeCountryNames); // ["France", "Germany"]
