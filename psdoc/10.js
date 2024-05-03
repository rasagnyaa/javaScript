// const returnArray=(a,b)=>{

//  let arr1=["a","ccc","dddd","bb"]
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

// Test the function
let arr1=["a", "ccc", "dddd", "bb"]
let result=sortByLength(arr1)
// console.log(sortByLength(arr1));
console.log(result)


