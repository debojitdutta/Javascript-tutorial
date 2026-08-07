
// CALLBACK FUNCTION

document.writeln('Curretly on file 11.js Callback functions')


function myFunct2(name){
  console.log("inside myfunct2")
  console.log("my name is",name)
}

function myFunct(a,b){
  console.log("inside myfunct")
  console.log(b)
  a("debojit")
}

// basically -  a() =myFunct2

myFunct(myFunct2,"debooo") 