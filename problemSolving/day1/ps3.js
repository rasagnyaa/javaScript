
// 3) Write a program to print the differnc between even sum and odd sum in the given number.
// input: 16534
// output:1
let num1=prompt("enter a number")
evensum=0
oddsum=0
for(i=0;i<num1.length;i++){
if(num1[i]%2==0){
    evensum=evensum+Number(num1[i])
}else{
oddsum=oddsum+Number(num1[i])
}   
                                                                                 
}
console.log(`differnce btwn evensum and oddsum = ${evensum-oddsum}`)

