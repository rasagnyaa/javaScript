//split a string in an array
function splitString(str,separator){
    let str1=str.split(separator)
    // console.log(str1)
    return str1
}
let str="hello,world"
let separator=","
let res=splitString(str,separator)
console.log(res);
