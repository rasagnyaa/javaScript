//.Check if a String Ends with a Substring:

function CheckString(str,substring){
let str1=str.endsWith(substring)
return str1
}
let str="hello world"
let substring="world"
let res=CheckString(str,substring)
console.log(res)