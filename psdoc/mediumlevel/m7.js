// Write a function that accepts an array of strings. Return the longest string(can not use predefined function).
// 		Input: [‘nik’, ’mikhil’, ’Cow’,’Elephant’] // Output: Elephant
function LongestString(arr){
    
    let emp=[]
    for(i=0;i<arr.length;i++){
        if(arr[i].length>emp.length){
            emp=arr[i]
            // console.log(emp);
        }
    }
    return emp
}
let arr=["nik", "mikhil","Cow","Elephant"]
let res=LongestString(arr)
console.log(res)