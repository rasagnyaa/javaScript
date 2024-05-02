let string="yppaH"
let reverseString=string.split("").reduceRight((prev,curr)=>{
return prev+curr
})
console.log("string = yppaH => ",reverseString)
