//Implement a function removeLastElement(array) that removes the last element from the array using the pop method.
// Input: removeLastElement([1, 2, 3, 4, 5])
// Output: [1, 2, 3, 4]
function removeLastElement(array){
    array.pop()
    return array
}
let myarray=[1,2,3,4,5]
let result=removeLastElement(myarray)
console.log(result)