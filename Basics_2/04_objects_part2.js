// const user=new Object()
const user={}

user.id='123abc'
user.name='qwerty'
user.isLoggedin=false

console.log(user)

const user2={
    email:'qwerty@gmail.com',
    'full name':{
        username:{
            firstname:'abc',
            lastname:'def'
        }
    }
}

console.log(user2["full name"]['username']['lastname'])


const obj1={1:100,2:'b'}
const obj2={3:'a',4:'b'}
console.log(obj1)

console.log(typeof(obj1[1])) // Tells the return type of the value not the key.
// Spread operator
// const obj3={...obj1,...obj2}

// Assign Operator
const obj3=Object.assign({},obj1,obj2)
console.log(obj3)


console.log(Object.keys(user2))
console.log(Object.values(user2))

console.log(user2.hasOwnProperty('email'))
