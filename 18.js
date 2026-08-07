
//  find method 

const myArray = ["dog", "cat", "rabbit", "cow", "goat"]

const res = myArray.find((s)=>s.length===3)
// idk what just happened
console.log(res)


// basically it can be used to find something unique in the array or obejct

// find using objects

const users = [
  {userId: 1, userName:"debo",price:1000000},
  {userId: 2, userName:"janvi",price:10},
  {userId: 3, userName:"nitish",price:1000},
  {userId: 4, userName:"kaliya",price:10000},
]

const findMethod = users.find((str)=>str.userId===2)
console.log(findMethod)