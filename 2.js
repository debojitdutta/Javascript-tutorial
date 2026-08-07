
//object destructuring

document.writeln('Curretly on file 2.js object destructuring')


const debojit ={
  name :"debojit",
  loveOfLife : "devaleena"
}

let {name, loveOfLife}=debojit;
console.log(name)



// -----------------

const debojit2 ={
  name2 :"debojit",
  loveOfLife2 : "devaleena"
}

let {name2:var1, loveOfLife2:var2}=debojit2;
console.log(var1)
console.log(debojit2)
console.log(var2)

// Function declaration (hoisted)
function sayHello() {
  return "Hello";
}

// Function expression
const sayHi = function() {
  return "Hi";
};

// Arrow function (no 'this' binding)
const greet = (name) => `Hello ${name}`;

console.log(greet)

let fruits = ["apple", "banana", "cherry"];

console.log(fruits[1]); // "banana"
fruits.push("date");    // adds to end
