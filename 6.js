
// ARROW FUNCTION

document.writeln('Curretly on file 6.js Arrow functions')


const normalFunction = () => {
  console.log("this is a normal function using arrow operator")
}

normalFunction()


// another way

const sum1 = (num1,num2) => {
  return num1+num2
}

const result= sum1(9,6)
console.log(sum1(50,60))
console.log(result)



// another way 
//1
const myFunc = () => console.log("my funct function called!")
myFunc()

//2 
const mul =(number1,number2)=>  console.log(number1* number2)
mul(5,6)
