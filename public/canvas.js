console.log("Hello World!");

let veggies = [
  {
    name: "celery",
    rating: 10,
  },
  {
    name: "tomatoes",
    rating: 7,
  },
  {
    name: "potatoes",
    rating: 8,
  },
  {
    name: "carrots",
    rating: 7,
  },
  {
    name: "eggplant",
    rating: 9,
  },
];

let hobbit = {
  name: "Frodo",
  age: 50,
};

// Access Every Value

console.log(veggies);

// Sort
let sortedVeggies = Array.from(veggies); // creates a new array from the contents of veggies

sortedVeggies.sort((a, b) => {
  // Ascending order
  if (a.rating < b.rating) {
    return 1;
  } else {
    return -1;
  }
});

console.log(sortedVeggies);
