// Exercise 1: Print Odds
const printOdds = (count) => {
  for (let i = 1; i <= Math.abs(count); i++) {
    if (i % 2 != 0) {
      console.log(i * Math.sign(count));
    }
  }
};

printOdds(-10);
printOdds(10);

// Exercise 2: Check Age
const checkAge = (name, age) => {
  let oldEnoughMsg = `Congrats ${name}! You can drive!`;
  let tooYoungMsg = `Sorry ${name}, you need to wait ${
    16 - age
  } year(s) until you can drive.`;

  if (age < 16) {
    console.log(tooYoungMsg);
  } else {
    console.log(oldEnoughMsg);
  }
};

checkAge("Ben", 12);
checkAge("Seth", 16);
checkAge("Cameron", 21);

// function oldEnough(age, targetAge) {
//   return age >= targetAge;
// }

// function checkLicense(name, age) {
//   let canDrive = oldEnough(age, 16);
//   let canHavePermit = oldEnough(age, 15);
//   let canDrink = oldEnough(age, 21);

//   if (canDrink) {
//     console.log(
//       `${name} can drink. ${name} can also drive. NOT AT THE SAME TIME.`
//     );
//   } else if (canDrive) {
//     console.log(`${name} can drive.`);
//   } else if (canHavePermit) {
//     console.log(`${name} can drive with another person of age.`);
//   } else {
//     console.log(`${name} too young. Wait some years.`);
//   }
// }

// checkLicense("Ben", 22);
// checkLicense("Seth", 17);
// checkLicense("Cameron", 14);

// Exercise 3: Quadrant
const checkQuadrant = (x, y) => {
  switch (true) {
    case x > 0 && y > 0:
      return "Quadrant 1";
    case x < 0 && y > 0:
      return "Quadrant 2";
    case x < 0 && y < 0:
      return "Quadrant 3";
    case x > 0 && y < 0:
      return "Quadrant 4";
    case x == 0 && y != 0:
      return "X Axis";
    case x != 0 && y == 0:
      return "Y Axis";
    default:
      return "Origin";
  }
};

console.log(checkQuadrant(11, 1));
console.log(checkQuadrant(-11, 1));
console.log(checkQuadrant(-1, -11));
console.log(checkQuadrant(1, -11));
console.log(checkQuadrant(0, -11));
console.log(checkQuadrant(11, 0));
console.log(checkQuadrant(0, 0));

// Exercise 4: Triangles
const isValidTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;

const checkTriangle = (a, b, c) => {
  let isValid = isValidTriangle(a, b, c);
  if (isValid) {
    if (a == b && b == c) {
      return `Equilateral`;
    } else if (a == b || b == c || a == c) {
      return `Isosceles`;
    } else {
      return `Scalene`;
    }
  } else {
    return `Not a valid triangle.`;
  }
};

console.log(checkTriangle(2, 3, 4)); // scalene
console.log(checkTriangle(2, 2, 2)); // eq
console.log(checkTriangle(1, 2, 2)); // isosceles
console.log(checkTriangle(1, 1, 2)); // invalid

// Exercise 5: Data
// planLimit, day, usage
/*
15 days used, 15 days remaining
Average daily use: 3.333 GB/day
You are EXCEEDING your average daily use (3.73 GB/day),
continuing this high usage, you'll exceed your data plan by
11.9 GB.
To stay below your data plan, use no more than 2.93 GB/day.
*/
const dataUsageFeedback = (planLimit, day, usage) => {
  let periodLength = 30;
  let currentAvg = usage / day;
  let projectedAvg = planLimit / periodLength;
  let remainingDays = periodLength - day;
  let remainingData = planLimit - usage;
  let projectedUsage = remainingDays * currentAvg;
  let statusMsg;

  if (currentAvg > projectedAvg) {
    statusMsg = "EXCEEDING";
  } else if (currentAvg < projectedAvg) {
    statusMsg = "UNDER";
  } else {
    statusMsg = "AT";
  }

  console.log(`${day} day(s) used, ${remainingDays} day(s) remaining
  Average projected use: ${projectedAvg.toFixed(2)} GB/day.
  You are ${statusMsg} your average daily use (${currentAvg.toFixed(2)} GB/day),
  continuing this usage, you'll end up using ${
    planLimit - (usage + projectedUsage)
  } GB from your data limit.
  To stay below your data plan, use no more than ${(
    remainingData / remainingDays
  ).toFixed(2)} GB/day.`);
};

dataUsageFeedback(50, 10, 25);
