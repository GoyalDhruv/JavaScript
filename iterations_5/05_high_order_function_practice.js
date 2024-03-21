


// Q1) Given an array of objects, write a function that returns a new array with only the names of each object.
let users1 = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 }
];

const names = users1.map((obj) => {
    return obj.name
})
console.log(names);


// Q2) Given an array of objects, write a function that returns a new array with only the objects whose "completed" property is true.
let users2 = [
    { id: 1, name: 'Alice', age: 30, 'completed': true },
    { id: 2, name: 'Bob', age: 25, 'completed': false },
    { id: 3, name: 'Charlie', age: 35, 'completed': false },
    { id: 4, name: 'Charlie', age: 35, 'completed': true },
    { id: 5, name: 'Charlie', age: 35, 'completed': true }
];


const ans1 = users2.filter((obj) => {
    return obj['completed'] == true
})
console.log(ans1);


// Q3) Given an array of objects, write a function that returns the total amount of money for all the objects.
const users3 = [
    { id: 1, name: 'Alice', age: 30, 'completed': true, money: 400 },
    { id: 2, name: 'Bob', age: 25, 'completed': false, money: 1400 },
    { id: 3, name: 'Charlie', age: 35, 'completed': false, money: 400 },
    { id: 4, name: 'Charlie', age: 35, 'completed': true, money: 200 },
    { id: 5, name: 'Charlie', age: 35, 'completed': true, money: 600 }
];

const totalMoney = users3.reduce((accumulator, current) => {
    return accumulator + current.money
}, 0);
console.log(totalMoney);


// Q4) Given an array of strings, return a new array with the length of each string
const arr = ["apple", "banana", "cherry"];
const lenghtArr = arr.map((obj) => { return obj.length })
console.log(lenghtArr);


// Q5) Given an array of objects representing people, return a new array with the full names of each person.
const people = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Doe" },
    { firstName: "Bob", lastName: "Smith" }
];

const fullName = people.map((obj) => {
    return `${obj.firstName} ${obj.lastName}`
})
console.log(fullName);


// Q6) Given an array of strings, return a new array with the first letter of each string capitalized and the rest in lowercase
const arr2 = ["APPLE", "BANANA", "CHERRY"];
const newArr = arr2.map((obj) => {
    return obj[0].toUpperCase() + obj.slice(1).toLowerCase()
})
console.log(newArr);


// Q7) Given an array of objects representing products, return a new array with the name and price of each product, formatted as a string
const products = [
    { name: "apple", price: 0.5 },
    { name: "banana", price: 0.25 },
    { name: "cherry", price: 1 }
];

const newProducts = products.map((obj) => {
    return obj.name + ' - ' + '$' + obj.price.toPrecision(3)
})
console.log(newProducts);


// Q8) Given an array of numbers, return the average of all the numbers
const arr3 = [1, 2, 3, 4, 5]; // expected output: 3

const sumValue = arr3.reduce((acc, curr) => {
    return acc + curr;
}, 0)
const avgValue = sumValue / arr3.length;
console.log(avgValue);


// Q9) Given an array of objects representing orders, return the total cost of all the orders, grouped by product
// expected output: { "apple": 2.5, "banana": 1, "cherry": 1 }
const orders = [
    { product: "apple", price: 0.5, quantity: 2 },
    { product: "banana", price: 0.25, quantity: 4 },
    { product: "cherry", price: 1, quantity: 1 },
    { product: "apple", price: 0.5, quantity: 3 }
];

const ans = orders.map((obj) => {
    return `${obj.product} : ${obj.price * obj.quantity}`
})

console.log(ans)


// Q10) Given an array of objects representing books, create a new array with only the books published in the last 5 years,
// then calculate the total number of pages for those books. 
const books = [
    { title: 'The Alchemist', author: 'Paulo Coelho', pages: 197, year: 2021 },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', pages: 224, year: 1951 },
    { title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', pages: 465, year: 2005 },
    { title: 'The Hunger Games', author: 'Suzanne Collins', pages: 303, year: 2018 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281, year: 1960 }
];

const newBooksPages = books.filter((obj) => {
    return ((new Date().getFullYear() - obj.year) <= 5)
}).reduce((acc, cur) => { return acc + cur.pages }, 0)

console.log(newBooksPages)



// Q11) Given an array of objects representing products, log the name and price of each product,then create a new array with only the prices.
const products2 = [
    { name: 'Shirt', price: 20 },
    { name: 'Pants', price: 30 },
    { name: 'Shoes', price: 50 }
];

products2.forEach(function (obj) {
    console.log(`${obj.name}:${obj.price}`)
})
// OR
products2.map(function (obj) {
    console.log(`${obj.name}:${obj.price}`)
})



// Q12) Given an array of objects representing students, calculate the average age of all the students.
const names2 = [
    { name: "John", age: 20 },
    { name: "Alice", age: 18 },
    { name: "Bob", age: 22 }
]

const ans3 = names2.reduce(function (acc, obj) {
    return acc + obj.age
}, 0)

console.log(ans / names2.length)



// Q13) Given an array of numbers, calculate the sum of all the even numbers.
const numbers = [1, 2, 3, 4, 5, 6]

const even = numbers.filter(function (i) {
    return i % 2 == 0
}).reduce(function (acc, cur) {
    return acc + cur
})
console.log(even)



// Q14) Given an array of objects representing students, calculate the sum of the age of all the students who have an age greater than 18.
const name3 = [{ name: "John", age: 20 }, { name: "Alice", age: 18 }, { name: "Bob", age: 22 }]

const ans4 = name3.filter((obj) => { return obj.age > 18 }).reduce((acc, curr) => {
    return acc + curr.age
}, 0)

console.log(ans)



// Q15) Given a REST API endpoint that returns an array of user objects, filter the array to only include users who are over 18 years old and then map the filtered array to only include their usernames.
// Example Input: [ {username: 'johndoe', age: 25}, {username: 'janedoe', age: 16}, {username: 'bobsmith', age: 20} ]
// Example Output: ['johndoe', 'bobsmith']
const person = [{ username: 'johndoe', age: 25 }, { username: 'janedoe', age: 16 }, { username: 'bobsmith', age: 20 }]

const data2 = person.filter((obj) => {
    return obj.age > 18
}).map((obj) => {
    return obj.username
})

console.log(data2)



// Q16) Given a REST API endpoint that returns an array of blog post objects, use the reduce function to calculate the total number of likes for all the blog posts.
// Example Input: [ {title: 'Post 1', likes: 10}, {title: 'Post 2', likes: 5}, {title: 'Post 3', likes: 3} ]
// Example Output: 18
const like = [{ title: 'Post 1', likes: 10 }, { title: 'Post 2', likes: 5 }, { title: 'Post 3', likes: 3 }]

const totallikes = like.reduce((acc, cur) => {
    return acc + cur.likes
}, 0)

console.log(totallikes)



// Q17) Given a REST API endpoint that returns an array of movie objects, use the filter function to only include movies with a rating greater than or equal to 8, and then use the map function to only include the movie titles.
// Example Input: [ {title: 'Movie 1', rating: 7.5}, {title: 'Movie 2', rating: 8.5}, {title: 'Movie 3', rating: 9.0} ]
// Example Output: ['Movie 2', 'Movie 3']
const movietitle = [{ title: 'Movie 1', rating: 7.5 }, { title: 'Movie 2', rating: 8.5 }, { title: 'Movie 3', rating: 9.0 }]

const title = movietitle.filter((obj) => {
    return obj.rating > 8
}).map((obj) => {
    return obj.title
})

console.log(title)



// Q18) Given a REST API endpoint that returns an array of product objects, use the forEach function to print the name and price of each product.
// Example Input: [ {name: 'Product 1', price: 10}, {name: 'Product 2', price: 20}, {name: 'Product 3', price: 30} ]
// Example Output: "Product 1 - $10" "Product 2 - $20" "Product 3 - $30"
const product = [{ name: 'Product 1', price: 10 }, { name: 'Product 2', price: 20 }, { name: 'Product 3', price: 30 }]

product.forEach((obj) => {
    console.log(obj.name + '- $' + obj.price)
})

// Q19) Given a REST API endpoint that returns an array of weather data objects, use the reduce function to calculate the average temperature for a specific location.
//  Example Input: [ {date: '2022-01-01', temperature: 10}, {date: '2022-01-02', temperature: 20}, {date: '2022-01-03', temperature: 30} ]
// Example Output: 20
const temp = [{ date: '2022-01-01', temperature: 10 }, { date: '2022-01-02', temperature: 20 }, { date: '2022-01-03', temperature: 30 }]

const totaltemp = temp.reduce((acc, cur) => {
    return acc + cur.temperature
}, 0)

console.log(totaltemp / temp.length)





// Q20) API PROBLEM
const data =
    [
        {
            "name": "John Doe",
            "age": 25,
            "gender": "male",
            "country": "USA"
        },
        {
            "name": "Jane Smith",
            "age": 32,
            "gender": "female",
            "country": "Canada"
        },
        {
            "name": "Tom Johnson",
            "age": 20,
            "gender": "male",
            "country": "USA"
        }
    ]

//TODO:- a) Write a JavaScript function that takes the above data and filters out all people whose age is less than 25.
const p = data.filter((obj) => {
    return obj.age < 25
})

console.log(p)


//TODO:- b) Write a JavaScript function that takes the above data and filters out all people whose country is not "USA".
const p1 = data.filter((obj) => {
    return obj.country !== 'USA'
})

console.log(p1)
