// Singleton
// Object.create

// Object Literals
const jsUser = {
    name: 'abc',
    'full name': 'qwe rty',
    age: 20,
    location: 'xyz',
    email: 'qwerty@gmail.com',
    isLoggedin: false,
    lastlogindays: ['Mondays', 'Saturday']
}

// Accessing the objects
console.log(jsUser.name)
// console.log(jsUser[name]) => this will show error
console.log(jsUser['name'])

console.log(jsUser['full name'])

console.log(jsUser['email'])
console.log('Updating email address')
jsUser.email = 'abc@gmail.com'
console.log('Before Freeze ',jsUser['email'])
// Freeze- Freezing an object does not allow new properties 
// to be added to the object and prevents removing or altering the existing properties
// Object.freeze(jsUser)

jsUser.email = 'xyz@gmail.com'
console.log('After Freeze ',jsUser['email'])

// Object are First class citizens
jsUser.greeting=function(){
    console.log('Hello')
}

jsUser.greeting2=function(){
    console.log(`Hello ${this["full name"]}`)
}

console.log(jsUser.greeting)
jsUser.greeting()
jsUser.greeting2()
