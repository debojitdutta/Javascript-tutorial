// LEXICAL FUNCTIONs

document.writeln('Curretly on file 8.js Lexical functions')


// this all about declaration either global, local or etc -_-

// BLOCK SCOPE VS FUNCTION SCOPE

// LET AND CONST ARE BLOCK SCOPE
// VAR IS FUNCTION SCOPE


// DEFAULT PARAMETERS

function addNum(a,b=0){ // b has default parameter
  return a+b
}

// const ans = addNum(4)
const ans = addNum(4,8)
console.log(ans)