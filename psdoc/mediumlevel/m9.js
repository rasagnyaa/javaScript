// Write Program to remove duplicate elements in an array and sort it in descending order(can not use predefined function).

// 			Input: [5,3,5,2,1,1,7,3,5,6]
// 			Output: [7,6,5,3,2,1]
let arr=[5,3,5,2,1,1,7,3,5,6]
emp=[]
for(i of arr){
    if(!emp.includes(i))
        emp.push(i)//[ 5, 3, 2, 1, 7, 6 ]
}
// console.log(emp)
for(i=0;i<emp.length;i++){
    for(j=i+1;j<emp.length;j++){
        if(emp[j]>emp[i]){
            x=emp[i]
            emp[i]=emp[j]
            emp[j]=x
        }
    }
}
console.log(emp)