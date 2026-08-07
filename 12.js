
// FUNCTION RETURNING FUNCTION

document.writeln('Curretly on file 12.js function returing function')


function myFunc() {
  function hello() {
    console.log("hello world!")
  }
  return hello;
}

const ans = myFunc()
ans()
console.log(ans())