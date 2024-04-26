//9.Join:
// Write a function joinArrayElements(array, separator) that joins all elements of
//  the array into a string with the specified separator using the join method.
// Input: joinArrayElements(["apple", "banana", "orange"], ", ")
// Output: "apple, banana, orange"

function joinArrayElements(array, separator){
let array1=array.join(separator)
return array1

}
let array=["apple", "banana", "orange"]
// let separator=","
let res=joinArrayElements(array,",")
console.log(`"${res}"`)