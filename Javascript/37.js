
// new keyword
// makes empty object
// also returns 
function createUser(firstName,age){
  this.firstName=firstName
  this.age = age
}

// createuser is empty obj now this={}
createUser.prototype.about=function(){
  console.log(this.firstName, this.age)
}
const user1 = new createUser("debojit",21)
console.log(user1)

user1.about()