// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
// Examples :
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots",12]]
// toArray({}) ➞ []
function ObjToArray(){
   let arr=Object.entries(obj)
   return arr
}
let obj={ a: 1,
    b: 2 
   }
console.log(ObjToArray(obj))
//2
function fun1(){
    let arr1=Object.entries(obj1)
    return arr1
}
let obj1={ shrimp: 15,
     tots: 12
     }
     let res=fun1(obj1)
     console.log(res)
     //3
   function fun2(){
    let arr2=Object.entries(obj2)
    return arr2
   }  
   let obj2={}
   console.log(fun2(obj2))