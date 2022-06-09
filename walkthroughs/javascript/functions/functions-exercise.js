function greet() {
  alert("Hello There!");

  let user = prompt("What's your name?");

  alert(`Welcome ${user}!`);

  let age = prompt("What's your age?");

  let ageInDays = calculateAgeInDays(age);

  alert(`Wow! You are ${ageInDays} days old!`);
}

greet();

function calculateAgeInDays(age) {
  return age * 365.25;
}
