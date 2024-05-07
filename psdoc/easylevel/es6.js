//7. Create a function that takes two arguments. Both arguments are integers, a and
// b. Return true if one of them is 10 or if their sum is 10.

function fun4(a,b){
    if(a===10 || b===10 || a+b==10){
        return true
    }
}
let a=10
let b=10
let res=fun4(a,b)
console.log(res)