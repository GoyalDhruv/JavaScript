function xyz(){
    console.log('A')
    console.log('B')
    console.log('C')
}

xyz()

function add(number1,number2)
{
    return number1+number2     
}

let sum=add(4,5)
console.log(sum)

function loginuser(user='qwerty'){
    return `${user} just logged in`
}

console.log(loginuser('abc'))
console.log(loginuser())  // undefined just logged in


// (...) it works as a rest operator 
// The rest operator in javaScript allows a function to take an indefinite number of arguments and bundle them in an array,
function calculatecartprice(...num1){
    return num1
}

console.log(calculatecartprice(100,200,300,400))

function calculate(val1,nums2,...num1){
    return num1
}

console.log(calculate(100,200,300,400))



const user={
    username:'qwerty',
    price:200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject['username']} and price is ${anyobject['price']}`)
}

handleObject(user)
handleObject({
    username:'abc',
    price:400
})