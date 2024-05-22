// 20. Create Function that will take one parameter and return type of the data.
			
// Input:       500
// Output:     Integer

// Input:       Coding
// Output:    String


function func(num){
    return (typeof num)
}
num=500
console.log(func(num))//number is the output

//case-2
function StrFun(str){
    return (typeof str)
}
let str="Coding"
console.log(StrFun(str))