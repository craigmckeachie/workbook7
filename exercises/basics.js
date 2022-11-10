//function declaration
function hello(name) {}

//function expression
const hello = (name) => {};

const hello = function (name) {};

//arrow function
(first) => {
  second;
};

//object
let animal = {
  name: "Hermano",
  hasFur: false,
};

//array
let numbers = [1, 2, 3, 4];

let courses = [
  { courseName: "Intro to JS" },
  { courseName: "Intermediate JS" },
  { courseName: "Advanced JS" },
];

for (const course of courses) {
}

for (let index = 0; index < courses.length; index++) {
  const course = courses[index];
}

const messageDiv = document.getElementById("message-div");
