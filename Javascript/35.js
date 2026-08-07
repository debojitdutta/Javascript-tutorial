// prototype
// idk wtf is this shh

// only funcitons provide prototype property

function hello(){
  console.log('hello world')
}

console.log(hello.prototype) // literally just prints name

hello.prototype.abc = "very unique value"

hello.prototype.sing = function(){
  return 'tung tung tung sahuurrr,  tralalio tralala'
}

console.log(hello.prototype.abc)
console.log(hello.prototype.sing())