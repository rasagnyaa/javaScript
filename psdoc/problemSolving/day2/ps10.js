const prompt=require('prompt-sync')();
numb=prompt("enter a number : ")
max=Number(numb[0])
for(i=1;i<numb.length;i++){
    if(numb[i]>max)
        max=numb[i]
    }
   

console.log(max)