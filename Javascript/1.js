
//spread operator

document.writeln('Curretly on file 1.js spread operator')


const array1 = [1,2,3]
const array2 = [5,6,7]

const newarray=[...array1,4,...array2]
console.log(newarray)

const obj1 = {
  a: "value1",
  b: "value2"
}

const obj2 = { 
  a: "uniquevalue",
  c: "value3",
  d: "value4"
}

const newobj = {...obj1,...obj2}
const brandnewobj={..."abcdefghijkklmnopqrstuvwxyz"}
console.log(brandnewobj)
console.log(newobj)