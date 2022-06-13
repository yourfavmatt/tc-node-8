// Sum of array of numbers
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
  //   let sum = 0;

  // iterate over each value in the array
  // add each number to the sum
  //   arr.forEach((number) => {
  //     sum += number;
  //   });

  // Using the Array reduce method
  return arr.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(arraySum(numbers));
console.log(arraySum([1, 2, 3, 4, 5]));

// Exercise 2: Book
let favBook = {};

favBook.title = "The Lies of Lamora Locke";
favBook.author = "Scott Lynch";
favBook.pageCount = 650;
favBook.readCount = 1;

console.log(favBook);

function info() {
  return `${this.title} by ${this.author} is ${this.pageCount} page(s) and has been read ${this.readCount} time(s).`;
}

favBook.info = info;

console.log(favBook.info());

let favBook2 = {
  title: "Red Seas Under Red Skies",
  author: "Scott Lynch",
  pageCount: 700,
  readCount: 1,
  info,
};

console.log(favBook2.info());

// Exercise 3: Reverse every word in a sentence
let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence) {
  // Identify the words based on spaces
  let words = sentence.split(" ");

  // Returns a new array after returning changed values per iteration
  let result = words.map((word) => {
    let letters = word.split(""); // ex "The" => [ "T", "h", "e"]
    letters.reverse(); // ex [ "e", "h", "T" ]
    return letters.join("");
  })

  return result.join(" ");
}

console.log(reverseWords(sentence));
console.log(reverseWords("My name is Ben"));
console.log(reverseWords("I am Ironman"));
