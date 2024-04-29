function EvenArray(arr){
    let evenNumbers=[]
    for(let i of arr){
        if(i%2==0){
            evenNumbers.push(i)
        }
    }
    return evenNumbers
}
let arr=[1,2,3,4,5,6,7,8]
let res=EvenArray(arr)
console.log(res)