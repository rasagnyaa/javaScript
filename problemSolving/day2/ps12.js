// 4) Write a program to print the largest non prime digit in the given number
// input: 463482
// ou
const prompt=require('prompt-sync')();
num=prompt("enter a number :")
max=Number(num[0])
min=Number(num[0])
for(n of num){

    if(n>1){
      c=0  
    for(i=2;i<=num.length;i++){
       if(n%i==0){ 
        c++
    break
       }
    }
       if(c==0){
          if(num[i]>max){
            max=num[i]
          }if(num[i]<min)
          min=num[i]
       }
    }
}
console.log(max+min)