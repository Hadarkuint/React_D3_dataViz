const x = 10;

console.log(x === 10); // equal to
console.log(x !== 5); // not equal to
console.log(x > 5); // greater than
console.log(x >= 10); // greater than or equal
console.log(x < 20); // less than
console.log(x <= 10); // less than or equal

// Works with strings too
console.log('apple' === 'apple'); // true

/*
Note: always use === (strict equality) instead of ==. 
The double equals does type coercion, which can lead to unexpected results like "5" == 5 being true.
*/

//If / else
const temperature = 24;

if (temperature > 30) {
  console.log("It's hot!");
} else if (temperature > 20) {
  console.log("It's nice outside");
} else {
  console.log("It's cold!");
}

// Try changing the temperature value!

/* 
Logical operators
Combine multiple conditions with && (and) and || (or). Use ! to negate a value:
*/
const age = 25;
const hasTicket = true;

// AND: both conditions must be true
console.log(age >= 18 && hasTicket); // true

// OR: at least one must be true
console.log(age < 18 || hasTicket); // true

// NOT: flips true to false
console.log(!hasTicket); // false

/** Ternary operator
For simple if/else cases, the ternary operator is a compact one-liner. 
It's widely used in React and D3: 

The syntax is condition ? valueIfTrue : valueIfFalse
*/
const value = 75;

// condition ? ifTrue : ifFalse
const statusTest = value > 50 ? 'high' : 'low';
console.log(statusTest); // "high"

// Common in D3: set color based on value
const color = value > 50 ? 'green' : 'red';
console.log(color); // "green"
