// objects inside array
// very useful in real world applications

document.writeln('Curretly on file 4.js ojects inside array')


const users = [
  { userId: 1, firstName: 'harshit', gender: 'male' },
  { userId: 2, firstName: 'mohit', gender: 'male' },
  { userId: 3, firstName: 'nitish', gender: 'male' }
]
for (let user of users) {

  // console.log(users[1].firstName);
  console.log(user.firstName)

}
console.log("----------------------")
const objArray = [
  { userId: 1, Name: 'palak', agender: 'female' },
  { userId: 2, Name: 'govind', agender: 'male' },
  { userId: 3, Name: 'farhan', agender: 'female' }
]
// this is one way

// const [{Name},{userId} , {agender}]=objArray;

// now changing variables name 
const [{ Name:name1 , }, { Name:name2 }, { Name:name3 }] = objArray;


console.log(name1)
console.log(name2)// variable changed
console.log(name3)
