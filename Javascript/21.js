
// fill method
// this can modify array elements by using index numbers and what number you want to fill 
// also if you want to fill an array with the same number tha just type the number in the fill method 

// .fill("value you wan to fill"  ","  "starting index"  "ending index")

const fillMethod = new Array(8).fill(0)
console.log(fillMethod)



const ary = [5,2,3,7,9]

ary.fill(0,1,4)
console.log(ary)
//[5,0,0,0,9]