const arr1=['abc','qwe','rty']
const arr2=['xyz','pqr','def']

// arr2.push(arr1)
console.log(arr2)

// Concat- it is used for concatenation two arrays
const arr3=arr2.concat(arr1)
console.log(arr3)

// Spread- (...) or spread operator works in a similar fashion as the Concat
const arr4= [...arr2,...arr1]
console.log(arr4)


// Flat- It is used to flatten the array
const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_arr=another_arr.flat(Infinity)
console.log(real_another_arr)


console.log(Array.isArray('ABCD'))
// From- It turns an array from any object
console.log(Array.from("ABCD"))


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))