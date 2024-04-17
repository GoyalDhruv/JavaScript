const promiseOne= new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('Async task is complete')
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log('Promise Consumed')
})



new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2")
        resolve()
    }, 1000);
}).then(function(){
    console.log('Async 2 resolved')
})



const promiseThree=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:'abc',email:'abc@gmail.com'})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user)
})



const promiseFour=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true
        if(!error){
            resolve({username:'abc',password:'123'})
        }else{
            reject("Error Something went wrong")
        }
    }, 1000);
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('Finally the promise is either resolved or rejected')
})



const promiseFive=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true
        if(!error){
            resolve({username:'javascript',password:'123'})
        }else{
            reject("Error Js went wrong")
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response=await promiseFive
    console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// Method-1

// async function getAllUsers(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//     const data=await response.json()
//     console.log(data)

//     } catch (error) {
//         console.log("E: ",error)
//     }    
// }

// getAllUsers()

// Method-2

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log("E: ",error)
})