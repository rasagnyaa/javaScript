let num=[1,2,3,4,5]
let n=num.every((eve)=>{
return eve>0
})
console.log("[1,2,3,4,5] > 0 => ",n)

let num1=[4,9,3,4,6]
let n1=num1.every((eve)=>{
return eve<0
})
console.log("[4,9,3,4,6] < 0 => ",n1)