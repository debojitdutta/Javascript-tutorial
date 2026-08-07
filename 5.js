
// functions in javascript

document.writeln('Curretly on file 6.js functios in js')


function sum(n1, n2) {
  return n1 + n2
}
const result = sum(12, 8)
console.log(result)


// converting this function into OTHER WAY TO CALL A FUNCTION

// *FUNCTION EXPRESSION

const sum1=function(num1, num2){
  return num1+num2
}

const ans=sum(3,2)
console.log(ans)


// HOISTING function IN JAVASCRIPT
// calling funcgio before declaration

hello()
function hello(){
  console.log("hello world! hoisted function")
}




// const myarray = [1, 2, 3, 5, 6, 9]
// const arrayHeight = myarray.length
// console.log(arrayHeight)
//  console.log(typeof(+myarray))