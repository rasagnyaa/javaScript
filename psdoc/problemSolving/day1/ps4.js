// 4) Write a program to print the largest sum between odd sum and even sum.
// input: 9474
// output: Odd sum is bigger
// input: 1658
// output: Even sum is bigger
let numb=prompt("enter a input : ")
es=0
os=0
for(i=0;i<numb.length;i++){
    if(numb[i]%2==0){
        es=es+Number(numb[i])
        
    }else{
      os=os+Number(numb[i])
    }
}
 if(os>es){
console.log("'odd' sum is bigger")
    }else if(es>os){
        console.log("even sum is bigger")
    }else{
console.log("even and odd are equal")
    }

