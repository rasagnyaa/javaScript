//4)arr=[1,2,3,4,5] sum of the array elements using reduce()
// output: 15

arr=[1,2,3,4,5]
 let arr1=arr.reduce((prev,curr)=>{
return prev+curr
 })
 console.log(arr1)