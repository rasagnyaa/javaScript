//2)arr[{name:"prashnth",age:20},{name:"teja",age:22},{name:"shiva",age:15}];
// output:prashanth,teja 
// need to filter the array whose age is greater than 18
let arr=[{name:"prashnth",age:20},{name:"teja",age:22},{name:"shiva",age:15}]
let arr1=arr.filter((ag)=>{
    return ag.age>18
})
console.log(arr1)