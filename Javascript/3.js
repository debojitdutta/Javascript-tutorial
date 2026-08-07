
document.writeln('Curretly on file 3.js for in loop')


const debo = {
  name: "debojit",
  class: 10,
  email: "debojit@gmail.com"
}

for (let i in debo) {
  console.log(`${i}: ${debo[i]}`)
  console.log(i, ":", debo[i])

}
