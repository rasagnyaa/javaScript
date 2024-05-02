let arrays=[[3,4],[5,6],[7,8]]
let flattendArray=arrays.reduceRight((prev,curr)=>{
    return prev.concat(curr)
})
console.log("[[3,4],[5,6],[7,8]] => ",flattendArray)