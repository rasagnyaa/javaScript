function Factorial(n){
    let result=1
    for(i=1;i<=n;i++){
        result=result*i
    }
    return result
}
let n=5
let res=Factorial(n)
console.log(`factorial of ${n} is '${res}'`)
