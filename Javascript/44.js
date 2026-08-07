document.writeln('Curretly on file 44.js hoisting')
//hoisting

console.log(this)
console.log(window)
console.log(firstName)
console.log(myFunc)  // here we can call myFunc function but cant call var anything with var data type
myFunc()
var firstName='debojit'
console.log(firstName)

function myFunc(){
  console.log("this is a function")
}

var lastName='dutta'
var fullName=firstName+" "+lastName
console.log(fullName)
myFunc()


console.log(anotherFunct) // onbviously undefined because it is using var

var anotherFunct=function (){
  console.log("this functoin is declared by var keyword")
}