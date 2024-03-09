// for of

const myarr=[1,2,3,4,5,6]

for (const num of myarr) {
    console.log(num)
}

const greetings='Hello World'

for (const val of greetings) {
    console.log(`Each char is ${val}`)
}


// Maps - It maintains the order in which the objects are inserted and the contains only one copy of the object.

const map= new Map()
map.set('IN',"India")
map.set('USA','United States of America')
map.set('FR','France')

console.log(map)

for (const [key,value] of map) {
    console.log(key,":-",value)
}


const myobj={
    'game1':'nfs',
    'game2':'fifa'
}

// for (const [key,value] of myobj) {
//     console.log(key,'-:',value)
// } // it will not work


// for in

for (const key in myobj) {
    console.log(`${key} and its value is ${myobj[key]}`)
}


const myarr2=['js','c++','java','python']

for (const key in myarr2) {
    console.log(myarr2[key])
}


// for each

const coding=['js','c++','java','python','ruby']

coding.forEach(function (val) {
    console.log(val)
})

coding.forEach( (val)=>{
    console.log(val)
})



function printme(item) {
    console.log(item)
}
coding.forEach(printme);

coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr)
})



const mycoding=[
    {
        languagename:'javascript',
        languagefilename:'js'
    },
    {
        languagename:'java',
        languagefilename:'java'
    },
    {
        languagename:'python',
        languagefilename:'py'
    },
]

mycoding.forEach( (item)=>{
    console.log(item.languagename)
})