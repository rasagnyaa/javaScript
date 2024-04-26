// 6.Count the Number of Characters in a String:
function countChars(string){
    let str=string.replace(/\s/g,'')
 let LengthChar=str.length
return LengthChar
}
let string="hello, world"
let charCount=countChars(string)
console.log(charCount)