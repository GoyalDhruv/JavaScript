const mynums=[1,2,3,4,5,6,7,8,9,10]

// Filter
const newnums=mynums.filter( (num)=>(num>4))

// const newnums=mynums.filter( (num)=>{ 
//     return num>4
// })

console.log(newnums)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userbooks=books.filter( (bk)=>(bk.genre==='Science'))
console.log(userbooks)

const publishdate=books.filter( (book)=>(book.publish>=1995 && book.genre==='History'))
console.log(publishdate)


// Map
const addnums=mynums.map((val)=>(val +10))
console.log(addnums)

// Chaning of multiple high order functions 
const chain=mynums.map( (n)=>(n*10))
            .map( (x)=>(x+1))
            .filter((x)=>(x>=40))
console.log(chain)

//Reduce
const total=mynums.reduce( function(acc,sum){
  console.log(`acc: ${acc} and sum:${sum}`)
  return acc+sum
},0)
console.log(total)


const total2=mynums.reduce( (acc,sum)=>(acc+sum),0)
console.log(total2)


const shoppingcart =[
  {
    'itemName':'js course',
    'price':3000
  },
  {
    'itemName':'py course',
    'price':4000
  },  {
    'itemName':'mobile dev course',
    'price':7000
  },  {
    'itemName':'data science course',
    'price':10000
  }
]

const cost=shoppingcart.reduce((acc,cart)=>(acc+cart.price),0)
console.log(cost)