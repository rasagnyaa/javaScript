// Implement a function getElementAtIndex(array, index) that returns the element at the given index in the array.
// Input: getElementAtIndex([10, 20, 30, 40, 50], 2)
// Output: 30

function getElementAtIndex(array, index) {

let arr=array.at(index)

return arr
}
array=[10, 20, 30, 40, 50]
index=2
let res=getElementAtIndex(array,index)
console.log(`the element at the given index(2) in the array is '${res}'`)