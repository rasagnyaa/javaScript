// let x1=12356.56
// let y1=parseInt(x1)
// console.log( y1)
// i/p=["1a","2b","c","d","5f"];
// o/p"["1a","2b","3c"]

// by using isNaN method
// const input = ["1a", "2b", "c", "d", "5f"];
const input = ["1a", "2b", "c", "d", "5f"];
const output = [];

for (let i = 0; i < input.length; i++) {
    if (isNaN(parseInt(input[i]))) {
        output.push(input[i]);
    }
}

console.log(output);
