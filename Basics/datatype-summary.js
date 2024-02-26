// Primitive
// 7 Type => String, Number, Boolean, null, undefined, Symbol, BigInt


// Reference (Non Primitive)
// Array, Object, Function

// Arrays
let array=[1,2,3,4]

// Object
myobj={
    name:'abc',
    age:20
}

// Function
const myfunc=function(){
    console.log("Hello World")
}
console.log(typeof(myfunc))

// --------------------------------
// Stack Memory (Primitive) {Copy is generated}

let variable1="abc"
let variable2=variable1
variable2="def"

console.log(variable2);
console.log(variable1);



// Heap Memory (Non-Primitive) {Reference of Original value}

let userOne={
    "email":"abc@gmail.com",
    "upi":"abc@abc"
}

let userTwo=userOne

userTwo.email='xyz@gmail.com'

console.log(userOne.email);
console.log(userTwo.email);
