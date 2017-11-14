// Write your solution here!
const drivers =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

destructivelyAppendDriver('Ralph');
drivers.pop();

function destructivelyPrependDriver(name){
  drivers.unshift(name);

}

console.log("the size of drivers after destructivelyPrependDriver is "+ drivers.length);
console.log("drivers[]: " + drivers);
destructivelyPrependDriver('Bob');
drivers.shift();

function destructivelyRemoveLastDriver(){
drivers.pop()
}

destructivelyRemoveLastDriver();

console.log("the size of drivers after destructivelyRemoveLastDriver is "+ drivers.length);
console.log("drivers[]: " + drivers);
