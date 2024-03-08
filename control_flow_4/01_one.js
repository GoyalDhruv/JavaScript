// if  else if  else

const temp=41

if(temp===41){
    console.log('Temp is 41')
}else if(temp===50){
    console.log('Temp is 50')
}
else{
    console.log('Temp is not 41')
}

// <,>,<=,>=,==,!=,===,!==

const score=200

if(score>100){
    let power='fly'
    console.log(`User power ${power}`)
}

const userLoggedIn=true
const debitCard=true
// And
if(userLoggedIn && debitCard){
    console.log('Allowed')
}

const LoggedInFromGoogle=false
const LoggedInFromEmail=true
// Or
if(LoggedInFromGoogle || LoggedInFromEmail){
    console.log('Allowed')
}


// Switch

const month=3

switch (month) {
    case 1:
        console.log("Jan")
        break;
    case 1:
        console.log("Feb")
        break;
    case 1:
        console.log("March")
        break;
    
    default:
        console.log('default case')
        break;
}