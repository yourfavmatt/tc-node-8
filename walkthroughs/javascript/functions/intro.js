//  Functions
let num = 1;

function greet(person) {
  console.log(`Hello, ${person}!`);
}

// invoke/call a function
greet("Cameron");
greet("Seth");
greet("World");

// Add Example
function add(x = 0, y = 0) {
  return x + y;
}

let sum = add(1, 1, 2, 2); // 2

console.log(sum);

// Sentence Builder
function sentenceBuilder(subject, verb, object, noun) {
  return `${subject} ${verb} with ${object} and ${noun}.`;
}

let sentence = sentenceBuilder("Seth", "travelled", "laptop", "Goku");
let paragraph =
  sentence + " " + sentenceBuilder("Cameron", "played", "orange", "tree");

console.log(paragraph);

// Pure vs Side Effect

// Pure
add(1, 1); // 2
add(2, 2); // 4
add(1, 1); // 2
add(2, 2); // 4

// Side Effect
greet("Seth"); // undefined
greet("Ben"); // undefined

let x = 2;

function multiply(y) {
  let prod;
  if (y) {
    prod = num * y;
  }
  return prod; // throws reference error. prod is not defined
}

multiply(10); // 20

console.log(prod); // throws reference error. prod is not defined

multiply(12); // 24

x = 4;

multiply(10); // 40 - different than before

// Local Scopes
// 1. Function Scope
// 2. Block Scope

function greet2(name) {
  // determineGreeting hoisted to HERE
  let greeting = determineGreeting();
  console.log(`${greeting}, ${name}!`);

  function determineGreeting() {
    // has access to locally scoped name parameter
    if (name.length > 4) {
      return "Hello";
    } else {
      return "Hi";
    }
  }
}
