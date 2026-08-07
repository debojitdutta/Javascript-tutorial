// proto, prototype

// const user = {
//   firstName:"debojit",
//   lastName: "Dutta",
//   email:"debojit@gmail.com",
//   age:12,
//   address:"HB road,guwahati, assam ",
//   about(){
//   console.log( `${this.firstName} is ${this.age}years` )
//   },
//   is18(){
//     return this.age >=18
//   },
// }


// const res= user.is18()
// user.about()
// console.log(res)

// to make many users

function createUser(firstName,lastName,email,age,address) {
  const user1 = {}
  user1.firstName=firstName
  user1.lastName=lastName
  user1.email=email
  user1.age=age
  user1.address=address
  user1.about = function(){
    return `${this.firstName} is ${this.age}years` 
    }
  user1.is18 = function(){
    return this.age >=18
  }
  return user1
}

const user = createUser('debojit','dutta','debodutta@femail.com',22,'xyz apartment')
console.log(user)
const res1 = user.about()
const res2 = user.is18()
console.log(res1)
console.log(res2)