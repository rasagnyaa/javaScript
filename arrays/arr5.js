//5.Shift:
// Write a function removeFirstElement(array) that removes the first element from the array using the shift method.
// Input: removeFirstElement([1, 2, 3, 4, 5])
// Output: [2, 3, 4, 5]
function removeFirstElement(array){
    array.shift()
    return array
}
let array=[1,2,3,4,5]
let res=removeFirstElement(array)
console.log(res)