
// PARAMS DESTRUCTURING

document.writeln('Curretly on file 10.js parameter destructuring')


const person = {
  name: "debojit",
  age: 21,
  gender: "male"
}

function printDetials({ name, age, gender }) {
  console.log(name)
  console.log(age)
  console.log(gender)
}

printDetials(person)

console.log("=============")

// another way
function printDetials2(obj) {
  console.log(obj.name)
  console.log(obj.age)
  console.log(obj.gender)
}
printDetials2(person)
