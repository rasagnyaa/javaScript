//11. Create a function that returns an array of strings sorted by length in ascending
// order.
// Example:
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
function sortByLength(arr){
   return arr.sort((a,b)=>a.length-b.length)
}
console.log(sortByLength(["a", "ccc", "dddd", "bb"]))