
// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
// Example:
// reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"


// function reverseCase(str){
//   let str1= str.replaceAll("Happy Birthday","hAPPY bIRTHDAY")
// return str1
// }
// let str="Happy Birthday"
// console.log(reverseCase(`"${str}"`))

//////////////////////
debugger
function reverseCase(str){
    let result=""
    for(i=0;i<str.length;i++){
        if(str[i]===str[i].toUpperCase()){
            result+=str[i].toLowerCase()
        }else{
            result+=str[i].toUpperCase()
        }
    }
    return result
}
let str="Happy Birthday"
 console.log(reverseCase(str))
