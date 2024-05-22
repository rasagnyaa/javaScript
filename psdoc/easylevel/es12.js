// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// Example:
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]



function findTheLargestNum(arr){
    
    for(i=0;i<arr.length;i++){
        max=arr[i][0]
        for(j  of arr[i]){
            if(j>max)
                max=j
        }
        result.push(max)
    }
    return result
}
let arr=[[4,2,7,1],[20,70,40,90],[1,2,0]]
let result=[]
let op=findTheLargestNum(arr)
console.log(op)




























































