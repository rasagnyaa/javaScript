//6.Unshift:
// Implement a function addToArrayStart(array, element) that adds an element to the beginning of the array using the unshift method.
// Input: addToArrayStart([2, 3, 4, 5], 1)
// Output: [1, 2, 3, 4, 5]
function addToArrayStart(array,element){
    array.unshift(element)
    return array
}
let array=[2,3,4,5]
let res=addToArrayStart(array,1)
console.log(res)