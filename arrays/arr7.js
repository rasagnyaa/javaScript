//7.Concat:
// Write a function concatArrays(array1, array2) that concatenates two arrays into a single array using the concat method.
// Input: concatArrays([1, 2, 3], [4, 5, 6])
// Output: [1, 2, 3, 4, 5, 6]
function concatArrays(array1, array2){
   let arr= array1.concat(array2)
   return arr
}
let array1=[1,2,3]
let array2=[4,5,6]
let res=concatArrays(array1,array2)
console.log(res)