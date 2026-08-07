
// Sets
// like array :
        // 1. store Data
        // 2. sets have its own method
        // 3. its is iterable
        // 4. NO index based access
        // 5. Unique items only (no duplicate items)
        // 6. order is not guaranteed

const numbers = new Set([1,2,3,3,4]);
console.log(numbers)
console.log(numbers[2])


const arr = [1,3,8,5,3,4,9,2,8,7,4]
const uniqueSet = new Set(arr)
console.log(uniqueSet)
console.log(typeof(uniqueSet))
// to find lenght
let length=0
for (const i of uniqueSet) {
  length++
}
console.log(length)