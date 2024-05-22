
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
// Example:

// removeDups([1, 0, 1, 0]) ➞ [1, 0]

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]


// let arr=[1,0,1,0]
// res=[]
// for(i of arr){
//     if(!res.includes(i))
//         res.push(i)
// }
// console.log(res)
let arr=["the","big","cat"]
res=[]
for(i of arr){
    if(!res.includes(i))
        res.push(i)
}
console.log(res)