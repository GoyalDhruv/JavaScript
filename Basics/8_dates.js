let mydate=new Date()

console.log(mydate);
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())

console.log(typeof(mydate))

let created_date=new Date(2024,0,22)
console.log(created_date.toDateString())

let created_date2=new Date('2024-01-22')
console.log(created_date2.toDateString())

let created_date3=new Date('01-22-2024')
console.log(created_date3.toDateString())


let timestamp=Date.now()
console.log(timestamp)
console.log(created_date.getTime())
console.log(`Time in milliseconds is ${timestamp-created_date.getTime()} and time in seconds is ${Math.floor((timestamp-created_date.getTime())/1000)}`)

let newDate=new Date()

console.log(newDate.toLocaleString('default',{
    weekday:  "long"
}))