const countries = ["France", "Germany", "Spain", "Italy", "Portugal"];

// Log the first country
console.log(countries[0]); // France
// Log the last country (hint: use .length)
console.log(countries[countries.length - 1]); // Portugal

// Check if "Spain" is in the array
console.log(countries.includes("Spain")); // true
// Check if "Japan" is in the array
console.log(countries.includes("Japan")); // true

// Join the array into a string with ", " as separator
console.log(countries.join(", ")); // France, Germany, Spain, Italy, Portugal

const company = {
  name: "TechCorp",
  headquarters: {
    country: "Japan",
    city: "Tokyo",
    employees: 5000,
  },
  founded: 2010,
};

// Log the city
console.log(company.headquarters.city);
