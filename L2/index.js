// Object , Array, Tuple and Enum
// Objects :  objects are a collection of key-value pairs with type safety.
// 1.  Inline Object Type
var person = {
    name: "john",
    age: 25,
    gender: "male"
};
console.log(person);
console.log(person.name);
var Obj = {
    name: "john",
    age: 25,
    gender: "male"
};
console.log(Obj);
var movie = {
    name: "starts war",
    rating: 2,
    genra: "action"
};
console.log(movie);
// ********************Arrays************************
var skills = ["nodejs", "Reactjs"];
// let numbers: number[] = [1, 2, 3, 4, 5];
console.log(skills);
// console.log(numbers)
//1.Mixed-Type Arrays
var mixedArray = ["hello", 1, 2, "Mohan"];
console.log(mixedArray);
var readonlyArray = [1, 2, 3];
// readonlyArray.push(5); this is wrong as array is readonly
console.log(readonlyArray);
// **********************TUPLES***************
// Tuples are a special type of array with a fixed number of elements, where each element has a known type
var tuple = ["jOHN", 23, true];
// tuple[1] = "mohan";   //this is wrong as second eleemnt is number 
console.log(tuple[1]);
//************SOME METHODS ON ARRAY **********************/
var numbers = [1, 2, 3, 4, 5];
//push
numbers.push(6);
// console.log(numbers)
// map:return the array
// the map function in TypeScript (and JavaScript) generates a new array. It does not modify the original array 
var result = numbers.map(function (num) { return num + 1; });
console.log(result);
// result[1] = 10;
// console.log(numbers)
//filter: return the new array
var response = numbers.filter(function (num) { return num % 2 == 0; });
console.log(response);
// Reduce
var valuee = numbers.reduce(function (acc, n) { return acc + n; }, 0);
console.log(valuee);
var arrOfObjects = [
    { name: "Rohan", age: 20 },
    { name: "mohan", age: 30 }
];
console.log(arrOfObjects);
// ****************ENUMS********************
var direction;
(function (direction) {
    direction[direction["up"] = 1] = "up";
    direction[direction["down"] = 2] = "down";
    direction[direction["left"] = 3] = "left";
    direction[direction["right"] = 4] = "right";
})(direction || (direction = {}));
// console.log(direction.up)
var dir;
(function (dir) {
    dir["east"] = "EAST";
    dir["west"] = "WEST";
    dir["north"] = "NORTH";
    dir["south"] = "SOUTH";
})(dir || (dir = {}));
console.log(dir.east);
console.log(dir.west);
var dire = 1 /* Direction.East */;
console.log(dire);
var person1 = {
    namee: "Rohan",
    age: 20,
    skills: ["java", "python"],
    officialIdName: [123, "Rohan"]
};
console.log(person1.officialIdName[1]);
console.log(person1);
