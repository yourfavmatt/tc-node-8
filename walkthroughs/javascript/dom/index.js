console.log("Hello World!");

let root = document.getElementById("root");

let h1 = document.querySelector("h1");

h1.textContent = "Changed the title via DOM manipulation";

let listItems = document.querySelectorAll("li");

let main = document.querySelector("main");

for (let element of listItems) {
  element.textContent = element.textContent.toUpperCase();
}

let btn = document.createElement("button");

btn.textContent = "Click Me!";

btn.onclick = function (event) {
  alert("You clicked the button");
};

main.appendChild(btn);

let input = document.querySelector("#title");

input.addEventListener("keyup", (event) => {
  console.log(event);
  h1.textContent = event.target.value;
});

// main.replaceChild(btn, h1);

// main.removeChild(h1);

let time = 0;

// let stopwatch = setInterval(() => {
//   if (time == 10) {
//     clearInterval(stopwatch);
//   } else {
//     h1.textContent = ++time;
//   }
// }, 1000);

setTimeout(() => {
  btn.textContent = "Changed after 5 secs";
}, 5000);
