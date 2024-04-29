function SumOfArray(arr){
    let sum=0
    for(let i of arr){
        sum=sum+i
    }
    return sum
}
let arr=[1,2,3,4,5]
let res=SumOfArray(arr)
console.log(res)
// let arr=[1,2,3,4,5]
// let sum=0
// for(let i=1;i<=arr.length;i++){
//     sum=sum+i
// }
// console.log(sum)