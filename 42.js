
// getter and setter
// get when used with function is not a function anymore now behaves like a proprty

document.writeln('Curretly on file 42.js getter and setter')


class person {
  constructor(firstName, lastName, age,) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  // get
 get fullname(){
    return `Full name is ${this.firstName} ${this.lastName}`
  }
}

const person1=new person("debojit","dutta",21)
// by using get we dont need ot use paranthesis for this function 
console.log(person1.fullname)