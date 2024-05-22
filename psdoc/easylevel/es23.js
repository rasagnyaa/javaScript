//program  to arrange numbers in ascending order
// const prompt=require('prompt-sync')();
// num=prompt("enter a number : ")
let arr=[2,3,1,5,4]
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[j]<arr[i]){
            x=arr[i]
            arr[i]=arr[j]
            arr[j]=x
        }
    }
}
console.log(arr)