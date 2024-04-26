//.Reverse a String:

function reversed(str){
    let str1=str.split("").reverse().join('')
    return str1
}
let str="hello"
let res=reversed(str)
console.log(res)