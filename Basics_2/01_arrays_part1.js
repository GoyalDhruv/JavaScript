// Arrays can be homogeneous and can be hetrogeneous
const myarr=[1,2,3,true,'abc']

const myarr2=new Array(0,1,2,3,4,5,6,7,8)

//-------- Array method ----------

// Push- adds a element at the end of the array
myarr2.push(5)
console.log(myarr2)

// Pop- removes a element from the end of the array
myarr2.pop()
console.log(myarr2)

// Unshift- adds a new element in the starting of the array
myarr2.unshift(9)
console.log(myarr2)

// Shift- removes a element from the end of the array
myarr2.shift()
console.log(myarr2)

// Includes
console.log(myarr2.includes(9))

// IndexOf
console.log(myarr2.indexOf(9))
console.log(myarr2.indexOf(3))

// Join
const newarr=myarr2.join()
console.log(myarr2)
console.log(newarr)
console.log(typeof(newarr))

// Slice and Splice
const newarr2=myarr2
console.log("A ", newarr2)

// Slice is used to extract a part of a string
console.log("Slice")
const slicearr=newarr2.slice(1,3)
console.log("B ", newarr2)
console.log(slicearr)

// Splice manipulates the original array by adding or removing the elements of the original array
console.log("Splice")
const splicearr=newarr2.splice(1,3)
console.log("C ", newarr2)
console.log(splicearr)
