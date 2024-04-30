// 4) Write a program to print the largest non prime digit in the given number
// input: 463482
// output 8
const prompt=require('prompt-sync')();
num=prompt("enter a number :")
max=0
for(n of num){
    if(n>1){
      c=0  
    for(i=2;i<n;i++){
      if(n%i==0){ 
      if(n>max)
      max=n
      c++
      break
       }
      }
}
}
console.log(max)
