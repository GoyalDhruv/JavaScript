// --------- Numbers -------------
const score=400
console.log(score);
console.log(typeof(score))

const n=new Number(100)
console.log(n);
console.log(typeof(n))


console.log(typeof(n.toString()))
console.log(n.toFixed(2))


const newnumber=new Number(86.55322)
console.log(newnumber.toPrecision(3))


const other=100000000
console.log(other.toLocaleString('en-IN'))

// --------- Maths -------------

console.log(Math)

console.log(Math.abs(-4))

console.log(Math.round(432.2233))
console.log(Math.ceil(4322.33232))
console.log(Math.floor(402.4411))

console.log(Math.min(3,4,4,5,6,7,5,4,1))
console.log(Math.max(3,4,4,5,6,7,5,4,1))


// IMP

// Generates a random decimal between 0 (inclusive) and 1 (exclusive)
console.log(Math.random())


console.log(Math.floor(Math.random()*10)+1)


// Generating random number between a minimum value and maximum value 
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)