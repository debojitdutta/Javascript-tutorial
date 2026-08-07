// treating functions as object

function hello(){
  console.log('hello world')
}

console.log(hello.name) // literally just prints name

hello.myOwnProperty = "very unique value"

console.log(hello.myOwnProperty)