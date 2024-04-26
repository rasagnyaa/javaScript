//.Replace a Substring with Another String:
function ReplaceSubstring(originalstring,replacestring,replacedstring){
    let replaced=originalstring.replace(replacestring,replacedstring)
    return replaced
}
let original="hello world"
let replaced=ReplaceSubstring(original,"world","universe")
console.log(replaced)