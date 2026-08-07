// const userMethods = {
//   about() {
//     return `${this.firstName} is ${this.age}years`
//   },
//   is18() {
//     return this.age >= 18
//   },
//   sing(){
//     return 'tung tung tung sahorr'
//   }
// }

function createUser(firstName, lastName, email, age, address) {
  const user1 = Object.create(createUser.prototype)    // one liner code😎
  user1.firstName = firstName
  user1.lastName = lastName
  user1.email = email
  user1.age = age
  user1.address = address
  // user1.about = userMethods.about
  // user1.is18 = userMethods.is18
  // user1.sing = userMethods.sing
  return user1
}

createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age}years`
}
createUser.prototype.is18 = function () {
  return this.age >= 18
}
createUser.prototype.sing = function () {
  return 'tung tung tung sahorr'
}

const realUser1 = createUser('debojit', 'dutta', 'debodutta@femail.com', 22, 'xyz apartment')
const realUser2 = createUser('sania', 'dutta', 'saniarahman@femail.com', 12, 'xyz apartment')
const realUser3 = createUser('nidhi', 'dutta', 'nidhichaudhary@femail.com', 22, 'xyz apartment')
console.log(realUser1)
console.log(realUser2)
console.log(realUser3)
const res1 = realUser1.about()
const res2 = realUser1.is18()
console.log(res1)
console.log(res2)
const res3 = realUser3.sing()
console.log(res3)