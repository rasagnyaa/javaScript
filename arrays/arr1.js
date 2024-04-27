//length
function arraylength(arr){
c=0
for(i in arr){
    c++
}
return c
}
let arr=[1,2,3,4,5,6]
let res=arraylength(arr)
console.log(`length of an array is  '${res}'`)
