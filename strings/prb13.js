//Check if a String Starts with a Substring:

function CheckString(str,substring){

let str1=str.startsWith(substring)
return str1

}
let str="hello world"
let substring="hello"
let res=CheckString(str,substring)
console.log(res)