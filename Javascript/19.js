
// every method

// every method checks all the elemnets in the array one by one if once the condition is not satisfied the every method come out of the loop and gives boolean output
// it is like filter method 

const ary = [50,2,32,74,90]



const isEven = ary.every((i)=>i%2===0)
console.log(isEven)

// checking if every amount is greater than 300

const productDetails = [
  {productId: 1001, productName: "silk_shirt", price: 1200 },
  {productId: 1002, productName: "synthetic_shirt", price: 900 },
  {productId: 1003, productName: "cotton_shirt", price: 1500 },
  {productId: 1004, productName: "leather_shirt", price: 2100 },
  {productId: 1005, productName: "wool_shirt", price: 1600 },
]

const res = productDetails.every((i)=>i.price>300)

console.log(res)
