// Count each occurrence of number(can not use predefined function).

// 			Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no find=7
// 			Output: 1 present 2 times.
// 				   2 present 1 times.
// 				   3 present 2 times.
// 				   5 present 1 times …….  Etc
let arr=[1,6,3,1,5,9,7,2,1,9,3,7,8,9,10]
let count={}
let find=7
for(i=0;i<arr.length;i++){
    if(count[arr[i]]){
        count[arr[i]]++
    }else{
        count[arr[i]] = 1
    }
}
for(j in count){
    // console.log(j + "present" + count[j] + "times")
    console.log(`${j} present ${count[j]} times`)
    
}