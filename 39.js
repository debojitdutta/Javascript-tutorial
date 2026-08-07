
// class keyword

class createUser {
  constructor(firstName, lastName, email, age, address) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.age = age
    this.address = address
  }
  about () {
    return `${this.firstName} is ${this.age}years`
  }

  is18() {
    return this.age >= 18
  }

  sing () {
    return 'tung tung tung sahorr'
  }
}
// createUser.prototype.about = function () {
//   return `${this.firstName} is ${this.age}years`
// }
// createUser.prototype.is18 = function () {
//   return this.age >= 18
// }
// createUser.prototype.sing = function () {
//   return 'tung tung tung sahorr'
// }


// these are the objects

const realUser1 = new createUser('debojit', 'dutta', 'debodutta@femail.com', 22, 'xyz apartment')
const realUser2 = new createUser('sania', 'dutta', 'saniarahman@femail.com', 12, 'xyz apartment')
const realUser3 = new createUser('nidhi', 'dutta', 'nidhichaudhary@femail.com', 22, 'xyz apartment')
console.log(realUser1)
console.log(realUser2)
console.log(realUser3)
const res1 = realUser1.about()
const res2 = realUser1.is18()
console.log(res1)
console.log(res2)
const res3 = realUser3.sing()
console.log(res3)