//Create a function that takes two strings as arguments and returns either true or
// false depending on whether the total number of characters in the first string is
// equal to the total number of characters in the second string.
function str(str1,str2){
if(str1==str2){
    return true
}else{
    return false
}
}
let str1="some"
let str2="one"
let result=str(str1,str2)
console.log(result)