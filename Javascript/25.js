// Maps() using object

const person = {
  id: 1,
  firstName: "debojit"
}

const extraInfo = new Map();
extraInfo.set(person,{age:12,gender:"male"})
// extraInfo.set({age:12,gender:"male"})

console.log(extraInfo.get(person).gender)


for (const element of extraInfo) {
  
  console.log(extraInfo)
}