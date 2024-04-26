// // 8.Check if a String Contains a Substring:
function stringInSubstring(string,substring){
 
    let FindSubstring=string.includes(substring)
    return FindSubstring
}
let string="my name is rasagnya"
let substring="rasagnya"
let result=stringInSubstring(string,substring)
console.log(result)

