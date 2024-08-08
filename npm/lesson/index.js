// we give the [npm init] command to initiate a new package
// then its generated a JSON file containig info provided

// then we install a preferred package with the [npm i package-name] command

import superheroes, { randomSuperhero } from 'superheroes';

const name = randomSuperhero();

console.log("My name is " + name);