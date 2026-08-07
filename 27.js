// method
const persons = {
  firstName: "debo",
  age: 21,
  about: function () {
    console.log(`person name is ${this.firstName} and age is ${this.age}`)
  },
  more: function () {
    console.log(this)
  }
}
persons.about()
persons.more()

console.log("===================================================================")

function personInfo() {
  console.log(`person name is ${this.firstName} and age is ${this.age}`)
}

const person1 = {
  firstName: "Dikshya",
  age: 21,
  about: personInfo
}
const person2 = {
  firstName: "Hiya",
  age: 12,
  about: personInfo
}
const person3 = {
  firstName: "Nidhi",
  age: 20,
  about: personInfo
}

person1.about()
person2.about()
person3.about()