//11.ToString:
// Write a function arrayToString(array) that converts an array into a string representation using the toString method.
// Input: arrayToString([1, 2, 3, 4, 5])
// Output: "1,2,3,4,5"

function arrayToString(array){
   let array1= array.toString()
    return array1
}
let array=[1, 2, 3, 4, 5]
let res=arrayToString(array)
console.log(`"${res}"`)