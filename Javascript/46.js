document.writeln('Currently on file 46.js --INYERVIEW QUESTIONS')
console.log('2'+2+'2')
console.log(NaN==NaN)
console.log(NaN===NaN)
const arr=[1,2,3,4]
arr2= arr.map((e)=>{
  return e*2
})

console.log(arr2)
const arr3=[200,600,300,80,500]
arr3.sort()
console.log(arr3)

//Fucntion curry 
// function curry(a){
//   return function (b){
//     return function(c){
//       return a+b+c
//     }
//   }
// }

// console.log(curry(1)(2)(3))
// console.log(res)

// Temporal dead one (TDZ)

// it is a line or a zone where a certain value cant be accessed because initialization is not done or whateveer
// function abc(){
//   console.log(res)
//     const res=1+2
// }
// abc()
// here console returns error cannot access before initialization





//
//console.log([]===[]) //false
console.log([]==[]) //false





//
const arr1=['A','B','C','D','A','A']
console.log(arr1.indexOf('A',1));



//
let abc=2
let a=!--abc
let b=!--abc
console.log(a,b);






//
function sum(){
  console.log("hello");
  return 2+2 
}
function square() {
  console.log("hii")
  return 4*4
}

let z = (sum(),square())
console.log(z)