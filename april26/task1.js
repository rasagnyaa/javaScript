
// 1.Write a JavaScript function that takes an array of strings and a target string. The function should return the index of the target string in the array using the indexOf method. If the target string is not found, return -1.
function ArrayOfString(array,target){
    return array.indexOf(target)
  
}
let fruits=["apple","banana","mango","grapes","lemon"]
let target="mango"
let result=ArrayOfString(fruits,target)
console.log(`'${result}'is target string`)
let fruits1=["apple","banana","mango","grapes","lemon"]
let target1="strawberry"
let result1=ArrayOfString(fruits1,target1)
console.log(`'${result1}',target string is not found`)
