let str="MOM"
let str1=""
for(i=str.length-1;i>=0;i--){
    str1=str1+str[i]
  
}
if(str==str1){
    console.log(`"${str}"is a palindrome`)
}else{
    console.log(`"${str} "is not a palindrome`)
}