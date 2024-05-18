debugger
function SecondLargestNum(arr){
let max=arr[0]
let secondmax=arr[0]
for(i=0;i<arr.length;i++){
    if(arr[i]>max){
        secondmax=max
        max=arr[i]
    }else if(arr[i]>secondmax && arr[i]!==max){
        secondmax=arr[i]
    }
}
return secondmax
}
let arr=[10,40,50,30,20]
let res=SecondLargestNum(arr)
console.log(res)