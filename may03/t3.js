//3) arr=[15,2,3,22,100] sort the array without using sort() method only using array iteration methods.
// output:[2,3,15,22,100]

arr=[15,2,3,22,100]
for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length-1;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}
console.log(arr)