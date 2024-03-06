let a=300
const b=100
var c=400
if(true){
    let a=20
    const b=30
    var c=40
    console.log('Inner A ',a)
    console.log('Inner B ',b)
    console.log('Inner C ',c)

}

console.log('Outer A ',a) 
console.log('Outer B',b)  
console.log('Outer C',c)  



function one(){
    const username='abc'

    function two(){
        const website='youtube'
        console.log(username)
    }
    // console.log(website)
    two()
}

one()

// Function Expression
const addTwo=function(num){
    return num+2
}

console.log(addTwo(5))