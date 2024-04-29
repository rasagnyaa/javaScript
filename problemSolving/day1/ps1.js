//Practice work:
// 1) Write a program that takes number as input, print the sum of odd digits in the given number
// input: 54213
// output: 9
let num=prompt("enter a number : ")
sum=0
for(i=0;i<num.length;i++){
 if(num[i]%2!==0){
     sum=sum+Number(num[i])
   }
   }
console.log(`sum of odd digits = ${sum}`)