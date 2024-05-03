//5)arr ={13,67,31,45,11,10,77,88] check whether every element in the array is greater than 18 or 
// not using every method perform the same input using some() method

//every method
arr =[13,67,31,45,11,10,77,88]
let arr1=arr.every((values)=>{
return values > 18
})
console.log("//every method",arr1)
//some method
arr1 =[13,67,31,45,11,10,77,88]
let arr11=arr1.some((values)=>{
return values > 18
})
console.log("//some method",arr11)