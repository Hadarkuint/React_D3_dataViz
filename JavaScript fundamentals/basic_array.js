const numbers = [5, 2, 8, 1, 9];

// Get the length
console.log(numbers.length); // 5

// Check if element exists
console.log(numbers.includes(8)); // true

// Find index of element
console.log(numbers.indexOf(8)); // 2

// Join into a string
console.log(numbers.join(' - '));

//check if all elements are greater than 0
const allGreaterThanZero = numbers.every((num) => num > 0);
console.log(allGreaterThanZero); // true

// Accessing properties
const person = {
  name: 'Alice',
  age: 28,
  city: 'Paris',
};

// Access with dot notation
console.log(person.name);
console.log(person.age);

// Access with bracket notation
console.log(person['city']);

//Nested objects
const person2 = {
  name: 'Alice',
  address: {
    city: 'Paris',
    country: 'France',
    values: [1, 2, 3, 4, 5],
  },
};

console.log(person2.address.city);
console.log(person2.address.country);

// Typical D3 data structure
const data = [
  { country: 'France', population: 67 },
  { country: 'Germany', population: 83 },
  { country: 'Spain', population: 47 },
];

// Access the first item
console.log(data[0]);

// Access a property of the second item
console.log(data[1].country);
console.log(data[1].population);
