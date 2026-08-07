
// REDUCE NETHOD
// IN THIS REDUCE METHOD ANY OPERATION IN THE FUNCTION IS DONE WITH THE SERIAL INDEXES OF THE ARRAY 
// FOR EXAMPLE IN CASE OF ADDITION THE FIRST INDEX IN TAKEN AND ADDED WITH THE SECOND INDEX THEN THE RESULT IS ADDED WITH THE THIRD INDEX AND GOES SO ON

//adding numbers in an array using reduce method

const arr = [1, 2, 3, 4, 5]
// you can set initial value in reduce here which is i is the initial value   100 is the initial value
const res = arr.reduce((i, j) => {
  return i + j;
}, 100)

console.log(res)


// example 2 with objects

const userCart = [
  { productId: 1, productName: "laptop", price: 22000 },
  { productId: 2, productName: "pc", price: 24000 },
  { productId: 3, productName: "tv", price: 32000 },
  { productId: 4, productName: "mobile", price: 12000 }
];

const totalAmount = userCart.reduce((k , l )=>{
  return k+l.price
},0)

console.log(totalAmount)