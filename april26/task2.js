// 2.Write a JavaScript function that takes an array of numbers and two indices. The function should return a new array containing the elements from the original array starting from the first index (inclusive) to the second index (exclusive) using the slice method.
function SliceMethod(array,startind,endind){
    let arr=array.slice(startind,endind)
    return arr
}
let array=[1,2,3,4,5,6,7,8,9,10]
startind=2
endind=7
let res=SliceMethod(array,startind,endind)
console.log(res)
