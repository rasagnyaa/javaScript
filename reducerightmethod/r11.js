let numbers=[1,2,3,4,5,6]
let sum=numbers.reduceRight((prev,curr)=>{
    return prev*curr
})
console.log(sum)