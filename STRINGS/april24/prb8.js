//.Find the Index of a Substring:
function IndexOfstring(string,substring){
let FindingIndex=string.indexOf(substring)
return FindingIndex
}
const string="thankyou for the beautiful life"
const substring="for"
let result=IndexOfstring(string,substring)
console.log(result)