//1) Write a program to print the sum of smallest unique no and smallest duplicate number.

// input: 351886761
// output: 1+3 = 4


const prompt=require('prompt-sync')();
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
    if(i<max){
        max=i
    
    }
}
    
console.log("smallest unq =>",max)
min=dup[0]
for(i of dup){
    if(i<min){
        min=i
    }
}
console.log("smallest dup =>",min)

let sumOFMaxMin=Number(min)+Number(max)
console.log("smallest dup+smallest unq =>",sumOFMaxMin)

// else{
// unq=unq+i+" "
// }
// }
// console.log(unq)
// console.log(dup)
// max=unq[0]


// for(n of unq){
//         if(n>max){
//         max=n
//     }
// }
// console.log(Number(min)+Number(max))