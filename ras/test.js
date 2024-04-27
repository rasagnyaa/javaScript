// console.log(a)
// var a=5;
// console.log(a)
// var a=10
// function foo(){
//     console.log(a)
//     var a=20
// }
// foo()//undefined

// var fruits = ['apple', 'banana', 'orange']; 
// console.log(fruits.length); 
// function FunSub(a,b){
//     return a-b
//     }
//     let a=8
//     let b=3
//     let res=FunSub(a,b)
//     console.log(res)
// function LengthString(str){
//     let str1=str.length
//     return str1
//     }
//     let str="hello"
//     let res=LengthString(str)
//     console.log(res)
/// var colors = ['red', 'green', 'blue']; 
// console.log(colors[2]); 
// function Addfun(a,b){
//     let add=a+b
//     return add
//     }
//     let a=2
//     let b=6
//     console.log(Addfun(a,b))

function isPalindrome(str){
let str1=str.split(" ").reverse().join(" ")
return str1
}
let str="love"
let res=isPalindrome(str)
console.log(`${str} palindrome`)