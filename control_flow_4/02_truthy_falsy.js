const email='a@abc.ai' 

if(email){
    console.log('Got user email')
}
else{
    console.log("Dont have user email")
}

// Falsy values
// false, 0, BigInt 0n, "", null, undefined, NaN

// Truty values
// '0', 'false', ' ', [], {},function(){} and all the other values

const obj={}

if(Object.keys(obj).length===0){
    console.log('Object is empty')
}



// Nullish Coalescing Operator (??): null undefined

let var1,var2,var3;
var1=5 ?? 10
var2=null ?? 10
var3=undefined ?? 20

console.log(var1)
console.log(var2)
console.log(var3)



// Terniary Operator
// condition ? true : false

const price=100
price<=80? console.log('less than 80'): console.log('more than 80')