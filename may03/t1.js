
// 1) Take an arr = [1,2,3,4,5] print the array using array iteration methods
//foreach
let arr=[1,2,3,4,5]
arr.forEach((values)=>{
console.log(values)
})
//map
let arr1=[1,2,3,4,5]
let arr2=arr1.map((values)=>{
return values*2
})
console.log("map method => ",arr2)
//filter 
let arr3=[1,2,3,4,5]
let arr4=arr3.filter((values)=>{
    return values > 3
})
console.log("filter method => ",arr4)
//reduce method
let arrr=[1,2,3,4,5]
let ar=arrr.reduce((prev,curr)=>{
return prev*curr
})
console.log("reduce method => ",ar)
//reduceRight methof
let red=[1,2,3,4,5]
let revred=red.reduceRight((prev,curr)=>{
return prev+curr
})
console.log("reduceRight method => ",revred)
//find method
let find=[1,2,3,4,5]
let found=find.find((value)=>{
return value > 3
})
console.log("find method =>",found)
//some method
let sme=[1,2,3,4,5]
let odd=sme.some((value)=>{
return value%2!==0
})
console.log("some method =>",odd)
//every method
let eve=[1,2,3,4,5]
let ev1=eve.every((values)=>{
return values < 0
})
console.log("every method =>",ev1)
//reverse mwthod
let rev=[1,2,3,4,5]
rev.reverse()
console.log("revere method => ",rev)
//sort method
let srt=[1,2,3,4,5]
let srt1=srt.sort((a,b)=>{
    return b-a
})
console.log("sort method =>",srt1)

