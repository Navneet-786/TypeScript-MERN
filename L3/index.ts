//UNION , LITERAL TYPE 

// *************UNION********************************
// | -> pipe symbol denote union

let vall:(number|string) = 2; //it means it store either number or string
let vall1:(number|string) = "mohan";
console.log(vall)
console.log(vall1)

function add(val1: number|string, val2: number|string):(number|string) {
  
  if(typeof val1 === "number" && typeof val2 === "number"){
    return val1 + val2
  }
  else{
    console.log(typeof val1)
    return val1.toString() + val2.toString()
  }
}
console.log(add(1,2))
console.log(add("hello", "world"))