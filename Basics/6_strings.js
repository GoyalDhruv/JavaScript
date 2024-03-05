const name='abc'
const lastname= 'def'

// console.log(name + " "+lastname);

console.log(`Hello, My name is ${name} and my last name is ${lastname}`);

const s=new String('abcdefghi')

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.charAt(3));
console.log(s.indexOf('h'));

// Slice and Substring

// substring can't work on negative indexing
const news=s.substring(2,8)
console.log(news);

// slice can work on negative indexing
const news2=s.slice(-5,-1)
console.log(news2);

// Trim
const news3=new String('       qwerty        ')
console.log(news3.trim());

// Replace
const news4=new String('https://abc.com/xyz%20qwwe')
console.log(news4.replace("%20","-"))

// Includes 
console.log(news4.includes('abc'));

// Split 
const news5=new String('abc-qwerty-xyz-def-ijk')
console.log(news5.split('-'));
