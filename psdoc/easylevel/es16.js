//
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
// Example:

// charCount("c", "Chamber of secrets") ➞ 1

function CharCount(str1,str2){

return str2.toLowerCase().split(str1.toLowerCase()).length-1

}
let str11="c"
let str22="Chamber of secrets"
let res=CharCount(str11,str22)
 console.log(res)