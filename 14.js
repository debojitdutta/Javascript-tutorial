// MAP METHOD

document.writeln('Curretly on file 14.js map method')


const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]



const apples = [12, 22, 32, 42];

const juice = apples.map(
  function (apple) {
    return apple * 2;
  }
);
console.log(juice); // [2, 4, 6, 8]



// 

const ary = [
  { fname: "debojt", lname: "dutta" },
  { fname: "devaleena", lname: "chowdhury" },
  { fname: "sabina", lname: "rahman" },
]

const result = ary.map(test)
console.log(result)
function test(i) {
  return i.fname
  // console.log(i.fname)
}



//
const arry = [4, 6, 8, 2]

const a = arry.map((n, i) => {
  return `index ${i}  ${n * n}`
})

const arra = arry.map(function(index){
  return index
})
console.log(arra)
console.log(a)