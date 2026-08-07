
// Map() method

const obj = new Map()
obj.set('firstName','debojit')
obj.set('age',21)
obj.set(1,'one')
obj.set([1,2,3],'one_two_three')
console.log(obj)
console.log(obj.get('firstName'))
console.log(obj.get('age'))
console.log(obj.keys(1))
for (const i of obj.keys()) {
  console.log(i)
}

for (const element of obj) {
  console.log(element)
  // console.log(obj)
}
console.log('===================================================================')
for (const element of obj) {
  // console.log(element)
  console.log(obj)
}
console.log('===================================================================')
for (const [e,value] of obj) {
  console.log(e,value)
}