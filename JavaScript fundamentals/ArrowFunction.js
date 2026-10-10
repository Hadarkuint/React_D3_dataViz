// Arrow function with explicit return
const double = (x) => {
  return x * 2;
};

console.log(double(5)); // 10
console.log(double(12)); // 24

// With two parameters
const add = (a, b) => {
  return a + b;
};
console.log(add(3, 7)); // 10

// Note: you can use a shorthand if your function has a single expression like this:
const doubleShorter = (x) => x * 2;

// Traditional function syntax
// function double(x) {
//   return x * 2;
// }

console.log(double(5)); // 10

// With two parameters
// function add(a, b) {
//   return a + b;
// }
console.log(add(3, 7)); // 10
