// optional chaining
// this is basically a '?' that is used when a data is not present but is expected . This can be used to avoid errors
// we can use "?" when any data is yet to come this will not give any errors

const obj = {
  name:'debojit',
  address:{houseNumber:'12A'},
  // age:21
}
console.log(obj?.name)
console.log(obj.address.houseNumber)
console.log(obj?.age)// gives undefined as a result cz age is not available at the moment
