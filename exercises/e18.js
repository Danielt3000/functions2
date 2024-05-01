/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import { maxBy } from "./e17";

export function getGreatestDiscoveryYear(data) {
  let obj = data.asteroids.reduce((ac, year) => {
    let years = year.discoveryYear;

    ac[years] = (ac[years] || 0) + 1;
    return ac;
  }, {});

  let maxYear = maxBy(Object.keys(obj), (key) => obj[key]);
  return Number(maxYear);
}

// discoveryYear

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
