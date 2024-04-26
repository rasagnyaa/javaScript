//8.Flat:
// Implement a function flattenArray(nestedArray) that flattens a nested array into a single-level array using the flat method.
// Input: flattenArray([[1, 2], [3, 4], [5, 6]])
// Output: [1, 2, 3, 4, 5, 6]
function flattenArray(nestedArray){
let nest=nestedArray.flat()
return nest
}
let nestedArray=[[1, 2], [3, 4], [5, 6]]
let res=flattenArray(nestedArray)
console.log(res)