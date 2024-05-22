// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
// Examples :
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
function arrayOfMultiples(num,length){
    let result=[]
    for(i=1;i<=length;i++){
        result.push(num*i)
    }
    return result
}
let num=7
let length=5
let res=arrayOfMultiples(num,length)
console.log(res)
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
function arrayOfMultiples2(){
    let result1=[]
    for(i=1;i<=length1;i++){
        result1.push(num1*i)
    }
    return result1
}
let num1=12
let length1=10
console.log(arrayOfMultiples2(num,length1))
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
function fun2(){
   
    let result2=[]
    for(i=1;i<=length2;i++){
        result2.push(num2*i)
    }
    return result2
}
let num2=17
let length2=6
console.log(fun2(num2,length2))