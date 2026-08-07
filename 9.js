
// rest parameters

document.writeln('Curretly on file 9.js rest parameter')

// function myFunc(a,b,c,d,e){
//   console.log("a is ",a)
//   console.log("b is ",b)
//   console.log("c is ",c)
//   console.log("d is ",d)
//   console.log("d is ",e)
  

//   //what is the difference between this two
  
//   console.log(`a is ${a}`)
//   console.log(`b is ${b}`)
//   console.log(`c is ${c}`)
//   console.log(`d is ${d}`)
//   console.log(`e is ${e}`)
// }


// myFunc(1,2,3,4,5,6,7,8,9)


const addNum =function(...a){
  var result=0
  for(k=1;k<=a.length;k++){
    
    // console.log("adding",result,"with",k)

    result=result+(k)
    // console.log(result)

  }
  console.log(result)
}

addNum(1,2,3,4,5,6)


// another way 

 function addAll(...numbers){
  let total=0
  for(n of numbers){
    total+=n
  }
  return total
}

const ans=addAll(1,2,3,4,5,6)
console.log(ans)