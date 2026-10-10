/* Array Methods: map and filter*/
console.log('Array Methods: map and filter');
console.log('---------- Map -------------------');

const numbers = [1, 2, 3, 4, 5];

// Option 1: write the function directly inside map
const doubled = numbers.map((n) => {
  return n * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

// Option 2: define the function first, then pass it
const triple = (n) => {
  return n * 3;
};
const tripled = numbers.map(triple);
console.log(tripled); // [3, 6, 9, 12, 15]

const data = [
  { country: 'France', population: 67 },
  { country: 'Germany', population: 83 },
  { country: 'Spain', population: 47 },
];

// Extract just the country names
const countries = data.map((d) => {
  return d.country;
});
console.log(countries); // ["France", "Germany", "Spain"]

// Convert population to millions string
const labels = data.map((d) => {
  return d.country + ': ' + d.population + 'M';
});
console.log(labels);

/* Filter: create a new array with only the elements that pass a test */
console.log(' ');
console.log('---------- Filter -------------------');
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];

// Keep only numbers greater than 4
const big = numbers2.filter((n) => {
  return n > 4;
});

console.log(big); // [5, 6, 7, 8]

const data2 = [
  { country: 'France', population: 67 },
  { country: 'Germany', population: 83 },
  { country: 'Spain', population: 47 },
  { country: 'Poland', population: 38 },
];

// Keep only countries with population > 50
const large = data2.filter((d) => {
  return d.population > 50;
});

console.log(large);
// [{ country: 'France', ... }, { country: 'Germany', ... }]
