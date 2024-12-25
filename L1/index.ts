//number , boolean , string
let a:number = 1;
// let a:number = '1'; //wrong as string is not assinged to number


let str:string = "hello world!"

function WriteSomething(fname:string,lname:string):string{
  return `my nam is ${fname} ${lname}`
}

const val:string = WriteSomething("John","Doe");
console.log(val)


function detectSound(s: Boolean): string {
  if (s) {
    return `sound is listening`;
  } else {
    return `sound is not listening`;
  }
}
const res = detectSound(true);
console.log(res);



//Note

//1. Explicitly Annotated: If you define the type explicitly, TypeScript will enforce it:

let age: number = 25; // `age` must be a number
// age = "hello"//this is string assigning which gives error


//2. Type Inference: TypeScript infers the type from the initial value:
let namee = "Navneet"; // TypeScript infers `name` as `string`

// 3. Default to any: If neither a type annotation nor an initial value is given, TypeScript uses the any type, meaning the variable can hold any type of value:

let value; // Default is `any`
value = 42;    // No error
value = "text"; // Still no error


//Disabling any as Default:
// Using strict mode (--strict or --noImplicitAny) in your tsconfig.json will require explicit type annotations for variables without initial values: