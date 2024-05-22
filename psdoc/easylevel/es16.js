function CharCount(str1,str2){

return str2.toLowerCase().split(str1.toLowerCase()).length-1

}
let str11="c"
let str22="Chamber of secrets"
let res=CharCount(str11,str22)
 console.log(res)