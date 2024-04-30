const prompt=require('prompt-sync')();
num=prompt("enter a number : ")
for(n of num){
   c=0
    if(n>1){
 for(i=2;i<n;i++){
            if(n%i==0){
           console.log("not a prime")
            c++
            break;
            }
        }
    }if(c==0){
        console.log("prime")
    }
}