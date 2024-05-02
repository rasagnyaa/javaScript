let arrays=[[1,2],[3,4],[5,6]]
let flattendArray=arrays.reduce((prev,curr)=>{
return prev.concat(curr)


})
console.log("[[1,2],[3,4],[5,6]] => ",flattendArray)