
// make class animal

class animal{
  constructor (name,age){
    this.name=name
    this.age=age
  }
  eat(){
    return `${this.name} is eating at the age of ${this.age}`
  }
}
// eat("carnivour")
const ani1 = new animal("lion",16)
console.log(ani1)
console.log(ani1.eat())
// const ani2 = new animal("lion",16)
// console.log(ani1)