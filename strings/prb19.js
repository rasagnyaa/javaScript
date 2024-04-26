//Check if a String Contains Only Digits:
function Digitstring(str){
    for(i=0;i<str.length;i++){
        if(str[i] < '0' || str[i] >'9'){
            return false
        }
    }
    return true
    }
    let str1="12345"
    let res1=Digitstring(str1)
    console.log(res1)
    let str2="12345io"
    let res2=Digitstring(str2)
    console.log(res2)