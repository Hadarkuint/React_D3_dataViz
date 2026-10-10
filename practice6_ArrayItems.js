// Create an array of objects matching the table
const data2 = [
  { fruit: "Apple", price: 1.2 },
  { fruit: "Banana", price: 0.8 },
];

console.log(data2);

const data = [
  { country: "France", population: 67 },
  { country: "Germany", population: 83 },
  { country: "Spain", population: 47 },
];

// Log Germany's population
console.log(data[1].population); // 83

const triple = (x) => x * 3;
const multiply = (x, y) => x * y;

// Return an object with name and score properties
const makePlayer = (name, score) => ({ name, score });

console.log(makePlayer("Alice", 100));
// should log { name: "Alice", score: 100 }

console.log(score >= 60 ? "pass" : "fail");

if (score >= 60) {
  console.log("pass");
} else {
  console.log("fail");
}

const numbers = [2, 4, 6, 8];

// Use map to triple each number
const tripled = numbers.map((x) => x * 3);

console.log(tripled); // should log [6, 12, 18, 24]

const data3 = [
  { city: "Paris", temp: 22 },
  { city: "London", temp: 18 },
  { city: "Berlin", temp: 20 },
];

// Extract city names
const cities = data3.map((data3Record) => data3Record.city);

console.log(cities); // should log ["Paris", "London", "Berlin"]

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];

// Keep only even numbers (hint: n % 2 === 0)
const evens = numbers2.filter((n) => n % 2 === 0);

console.log(evens); // should log [2, 4, 6, 8]

const data4 = [
  { city: "Paris", temp: 22 },
  { city: "London", temp: 18 },
  { city: "Berlin", temp: 20 },
];

// Chain filter and map
const warmCityNames = data4.filter((d) => d.temp > 19).map((z) => z.city);

console.log(warmCityNames); // should log ["Paris", "Berlin"]
