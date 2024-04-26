debugger
function isPalindrome(str){
let str1=""
for(i=str.length-1;i>=0;i--){
  str1+=str[i]
}
// console.log(str1);
if(str==str1){
  return true;
}
else{
 return false
}
}
let str2=prompt("Enter a string: ");
if(isPalindrome(str2)==true)
console.log(`${str2} is Palindrome`);
else
console.log(`${str2} is not a Palindrome`);

