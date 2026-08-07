const obj1={
  key1:"value1",
  key2:"value2",
}
const obj2={}
obj2.key3="value3"
console.log(obj2)

// there is one more way to create an empty object

const obj3= Object.create(obj1)  // this is basically a emplty obj but it any data is not found in this object than the given parameter object is provided 
console.log(obj3.__proto__)
console.log(obj3)
console.log(obj3.key2)
