
// sort method

let arr= [50,61,72,130,94,35]
let arra = [14,960,36,560,123]


let res = arr.sort((a, b)=>{return a-b})

// a-b because take 50-61= the result is +11 which is more than 0
// but 72-130 is is -160  that is less than 0 so the sorting begins



// FOR REVERSE SORTING

let res2 = arra.sort((y,j)=>j-y)
console.log(res2)
console.log(res)


// SORTING IN OBJECT


const productDetails = [
  {productId: 1001, productName: "silk_shirt", price: 1200 },
  {productId: 1002, productName: "synthetic_shirt", price: 900 },
  {productId: 1003, productName: "cotton_shirt", price: 1500 },
  {productId: 1004, productName: "leather_shirt", price: 2100 },
  {productId: 1005, productName: "wool_shirt", price: 1600 },
]

const productSorting = productDetails.slice(0).sort((a,b)=>{
  // here a is the first object and b is the second object
  return a.price-b.price
})

console.log(productDetails)
console.log(productSorting)