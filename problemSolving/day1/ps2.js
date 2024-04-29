//2) Write a program to print the sum of even digits in the given numbers
// input:542
// output: 6
let input=prompt("enter input :")
sum=0
for(i=0;i<=input.length;i++){
    if(input[i]%2==0){
        sum=sum+Number(input[i])
    }
}
console.log(`sum of even digits = ${sum}`)