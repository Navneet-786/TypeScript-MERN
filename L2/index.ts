// Object , Array, Tuple and Enum

// Objects :  objects are a collection of key-value pairs with type safety.

// 1.  Inline Object Type
const person:{name:string,age:number,gender:string}={
  name:"john",
  age:25,
  gender:"male"
}
console.log(person);
console.log(person.name);

//2. Type Alias: start with type keyword

//this part is used anywhere you want
type objectStr ={
  name:string,
  age:number,
  gender:string,
  isAdmin?: boolean; //it is optional property
}
const Obj:objectStr = {
  name:"john",
  age:25,
  gender:"male"
}
console.log(Obj)


//3. Interface:it provide another way to define object types
interface MovieType{
  name:string,
  rating:number
  genra:string
}
const movie : MovieType ={
  name:"starts war",
  rating:2,
  genra:"action"
}
console.log(movie)


// ********************Arrays************************
const skills : string[]=["nodejs","Reactjs"];
// let numbers: number[] = [1, 2, 3, 4, 5];
console.log(skills)
// console.log(numbers)

//1.Mixed-Type Arrays
const mixedArray:(string|number)[]=["hello",1,2,"Mohan"];
console.log(mixedArray)

let readonlyArray: readonly number[] = [1, 2, 3];
// readonlyArray.push(5); this is wrong as array is readonly
console.log(readonlyArray);




// **********************TUPLES***************

// Tuples are a special type of array with a fixed number of elements, where each element has a known type
let tuple: [string, number, boolean] = ["jOHN", 23, true];
// tuple[1] = "mohan";   //this is wrong as second eleemnt is number 
console.log(tuple[1]);




//************SOME METHODS ON ARRAY **********************/
let numbers: number[] = [1, 2, 3, 4, 5];

//push
numbers.push(6);
// console.log(numbers)

// map:return the array
// the map function in TypeScript (and JavaScript) generates a new array. It does not modify the original array 
const result:number[] = numbers.map(num=>num+1);
console.log(result);
// result[1] = 10;
// console.log(numbers)

//filter: return the new array
const response:number[] = numbers.filter(num=>num%2==0);
console.log(response)


// Reduce
const valuee :number = numbers.reduce((acc,n)=>acc+n,0);
console.log(valuee)


// ************************ARRAY OF OBJECTS****************
// You can create arrays of objects using interfaces or type aliases

interface User{
  name:string;
  age:number
}
let arrOfObjects:User[]=[
  {name:"Rohan",age:20},
  {name:"mohan",age:30}
];
console.log(arrOfObjects)


// ****************ENUMS********************
enum direction{
  up=1,
  down=2,
  left=3,
  right=4
}
// console.log(direction.up)
enum dir{
  east="EAST",
  west="WEST",
  north="NORTH",
  south="SOUTH"
}
console.log(dir.east);
console.log(dir.west);


const enum Direction {
  North,
  East,
  South,
  West,
}

const dire:Direction = Direction.East;
console.log(dire)




type Person={
  namee:string,
  age:number,
  skills:string[],
  officialIdName:[number,string]
}
const person1:Person={
  namee:"Rohan",
  age:20,
  skills:["java","python"],
  officialIdName:[123,"Rohan"]
}
console.log(person1.officialIdName[1]);
console.log(person1);