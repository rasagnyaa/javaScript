debugger
function arrayLength(arr) {
    let count = 0;
    for (let i in arr) {
        count++;
    }
    return count;
}

// Example usage:
let arr = [1, 2, 3, 4, 5];
console.log(arrayLength(arr)); // Output: 5
