const prompt=require('prompt-sync')();
num=prompt("enter a number : ")
max=Number(num[0])
min=Number(num[0])
for(n of num){
    if(n>1){
        c=0
        for(i=2;i<n;i++){
            if(n%i==0){
                c++
                 break
            }
        }
        if(c==0){
            if(n>max)
            max=n
        if(n<min)
        min=n
        }
    }

}
console.log(Number(max)+Number(min))