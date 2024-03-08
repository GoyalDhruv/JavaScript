// Immediately Invoked Function Expressions

(function one() {
    //named IIFE
    console.log('DB Connected')
})();

((name) => {
    console.log(`DB2 Connected ${name}`)
})('abc');