//10.Delete:
// Implement a function deleteElement(array, index) that deletes the element at the given index in the array using the delete operator.
// Input: deleteElement(["a", "b", "c", "d", "e"], 2)
// Output: ["a", "b", empty, "d", "e"]
function deleteElement(array, index){
    delete array[index]
    return array
}
let array=["a", "b", "c", "d", "e"]
let res=deleteElement(array,2)
console.log(res)