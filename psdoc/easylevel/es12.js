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




























































