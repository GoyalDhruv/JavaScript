// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        console.log('5 is best number')
        continue;
    }
    console.log(element)
}

for (let i = 1; i <=10; i++) {
    console.log(`Outer Loop Value : ${i}`)
    for (let j = 1; j <=10; j++) {
        // console.log(`Inner Loop Value ${j} and Outer Loop ${i}`)
        console.log(`${i} * ${j} = ${i*j}`)
    }
}

// break and continue

const myarray=['abc',1,'def',1.2,'qwerty']

for (let i = 0; i < myarray.length; i++) {
    console.log(myarray[i])
    
}