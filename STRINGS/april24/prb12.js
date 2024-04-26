//concat strings


function ConcatStrings(str1,str2){
    let str=str1.concat(str2)
    return str
}
let str1="some"
let str2="thing"
let res=ConcatStrings(str1,str2)
console.log(res)