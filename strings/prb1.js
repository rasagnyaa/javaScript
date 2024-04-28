// debugger
// function isPalindrome(str){
// let str1=""
// for(i=str.length-1;i>=0;i--){
//   str1+=str[i]
// }
// // console.log(str1);
// if(str==str1){
//   return true;
// }
// else{
//  return false
// }
// }
// let str2=prompt("enter a string:")
// if(isPalindrome(str2)==true)
// console.log(`${str2} is Palindrome`);
// else
// console.log(`${str2} is not a Palindrome`);
debugger;
function isPalindrome(str){
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
}
console.log(isPalindrome("MOM"))
console.log(isPalindrome("ram"))
console.log(isPalindrome("siri"))
