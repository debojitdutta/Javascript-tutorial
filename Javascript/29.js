
// .call() also knpown as function borrowing

// apply

// bind


const user1 = {
  name: "debojit",
  age: 9,
  lastname: "dutta",
  about: function (hobby, music) { console.log(this.name, this.age, hobby, music) }
}

//------------------

myFunc = function (hometown,state) {
  console.log(this.name, this.lastname,hometown,state)
}

//----------------

const user2 = {
  name: "nidhi",
  lastname: "chaudhary", 
  age: 9
}

user1.about.call(user2, "reading", "nadanparinday")
user1.about("playing","localtrain")
user1.about.call(user1,"playing","localtrain")// while using call methof it is mandatory to give parameter in the bracket

console.log("=====================================")

myFunc.call(user1,"guawahati","dispur")
myFunc.call(user2,"bihar","patna")


// apply
//apply is just like call 
// apply uses call function internally so apply ad call are same
// just dif is you can pass the parameters in array format

console.log("======================apply method=============================")

myFunc.apply(user1,["guawahati","dispur"])



// bind method 
//it stores the function call in a function


console.log("===================bind method==================")

const f1 = myFunc.bind(user1,"guawahati","dispur")
const f2 = myFunc.bind(user2,"bihar","patna")
// const f3 = myFunc.apply(user1,["guawahati","dispur"])

f1() // function called
f2() // function called
