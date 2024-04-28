import { data } from "../data/data";

// SPACE DATA EXERCISE 1
// Return an array of all Planets' names
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetNames(data) {
  let obj = [];
  data.planets.filter((value) => {
    obj.push(value.name);
  });
  return obj;
}
