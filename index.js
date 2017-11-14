// Write your solution here!
const drivers =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

destructivelyAppendDriver('Ralph');
drivers.pop();

drivers.length = 0;

drivers.push('Milo', 'Otis', 'Garfield');

function destructivelyPrependDriver(name){
  drivers.unshift(name);

}

console.log("the size of drivers after destructivelyPrependDriver is "+ drivers.length);
console.log("drivers[]: " + drivers);
destructivelyPrependDriver('Bob');
drivers.shift();

function destructivelyRemoveLastDriver(){
drivers.pop();
}

destructivelyRemoveLastDriver();
drivers.length = 0;

drivers.push('Milo', 'Otis', 'Garfield');

console.log("the size of drivers after destructivelyRemoveLastDriver is "+ drivers.length);
console.log("drivers[]: " + drivers);

function destructivelyRemoveFirstDriver(){
drivers.shift();

}

destructivelyRemoveFirstDriver();

console.log("the size of drivers after destructivelyRemoveFirstDriver is "+ drivers.length);
console.log("drivers[]: " + drivers);

drivers.length = 0;

drivers.push('Milo', 'Otis', 'Garfield');

function appendDriver(name){

const newDrivers = [...drivers, 'Broom'];
return newDrivers;

}

appendDriver('Broom');

function prependDriver(name){

const newDrivers = ['Arnold', ...drivers];
return newDrivers;

}
