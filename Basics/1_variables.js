const accountId=144553
let accountEmail='abc@gmail.com'
var accountPassword='12345'
accountCity='abc'
let accountState

// accountId=2 (Not allowed)
accountEmail='def@gmail.com'
accountPassword='23456'
accountCity='deff'

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and function scope
*/ 

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])