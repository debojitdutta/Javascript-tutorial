
// some method

// some method is like filter and every method but this finds ki kya ek bhi data isme true hai agar hai toh true print karegaaaa bass
// checks all the elements in the array and if condition mathes it prints true

const ary = [5,2,3,7,9]

const isEven = ary.some((i)=>i%2===0)
console.log(isEven)

// in object
//Q: find if any product here is less than 300  // prints false bytheway
const productDetails = [
  {productId: 1001, productName: "silk_shirt", price: 1200 },
  {productId: 1002, productName: "synthetic_shirt", price: 900 },
  {productId: 1003, productName: "cotton_shirt", price: 1500 },
  {productId: 1004, productName: "leather_shirt", price: 2100 },
  {productId: 1005, productName: "wool_shirt", price: 1600 },
]

const res = productDetails.some((i)=>i.price<300)

console.log(res)
