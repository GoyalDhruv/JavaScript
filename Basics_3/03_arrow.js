const user = {
    username: 'abc',
    price: 999,
    welcome_msg: function () {
        console.log(`${this.username},welcome to website`)
        // console.log(this) => it refers to an object
    }
}

user.welcome_msg()

user.username = 'xyz'
user.welcome_msg()

console.log(this) // here, it will be an empty object

function qwerty(){
    let username='defg'
    console.log(this.username) // it will print undefined
}

qwerty()

// Arrow Function
const aaa = (num1,num2)=>{
    return num1+num2
}

console.log(aaa(3,5))

// Arrow Function Implicit return
const bbb=(num1,num2) => (num1+num2)

console.log(bbb(4,6))