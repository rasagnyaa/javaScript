//Trim Whitespace from a String:
// function TrimString(str){
//      return str.replace(/\s/g,'');
    
// }
// let str1="     hello    world    "
// let res=TrimString(str1)
// console.log(res)


//using trim()

function TrimString(str){
    let str1=str.trim()
    return str1
}
let str=" hello,world "
let res=TrimString(str)
console.log(res)

