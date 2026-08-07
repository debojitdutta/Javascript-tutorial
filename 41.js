
// extends



class animal{
  constructor (name,age){
    this.name=name
    this.age=age
  }
  eat(){
    return `${this.name} is eating at the age of ${this.age}`
  }
}
// const ani1 = new animal("lion",16)
// console.log(ani1)
// console.log(ani1.eat())



// **super keyword**

class dog extends animal{
  constructor(name,age,speed) {
    super(name,age)
    this.speed=speed
  }

  eat(){
    return `Modified function : ${this.name} is eating at the age of ${this.age}`
  }

  run(){
    return `${this.name} can run at the speed of ${this.speed} kmph`
  }
}

const gimmy = new dog("gimmy",6,43)
console.log(gimmy)
console.log(gimmy.run())
console.log(gimmy.eat())