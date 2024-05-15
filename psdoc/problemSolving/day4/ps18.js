//// 2) Write a program to print the sum of largest duplicate and largest unique number.
// input: 2237748
// output: 7+8 = 15
debugger
// const prompt=require('prompt-sync')();
num=prompt("enter a number : ")
s=""
unq=""
dup=""
min=num[0]
max=num[0]
for(i of num){
    if(!s.includes(i))
    s=s+i
}
    
    for(i of s){
        c=0
        for(j of num){
        if(i==j){
            c++
        }
    }
if(c>1){
        dup=dup+i
    }else{
        unq=unq+i
    }
}

max=unq[0]
for(i of unq){
    if(i>max){
        max=i
    }
}
console.log("largest of unq =>",max)
min=dup[0]
for(i of dup){
    if(i>min){
        min=i
    }
}
console.log("largest of dup =>",min)
let sumOFMaxMin=Number(max)+Number(min)
console.log(" sum of largest unq and largest dup =>",sumOFMaxMin)