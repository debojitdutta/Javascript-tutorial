// FUNCTION INSIDE FUNCTION

document.writeln('Curretly on file 7.js functions inside functions')


function myFunct() {
  const add = () => 1 + 2
  console.log("inside myFunct function")
  const result=add()
  console.log(result)
  console.log(add())
}
myFunct()