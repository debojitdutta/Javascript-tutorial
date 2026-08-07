function myFunc(power) {
  return function (number) {
    return number ** power
  }
}
const square = myFunc(2)
ans = square(20)
console.log(ans)
