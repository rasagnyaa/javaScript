function countOccurance(string,char){
    let count=0
    for(i=0;i<string.length;i++){
        if(string[i]===char){
            count++
        }
    }
    return count
}
let GivenString="hello world"
let CharToCount="l"
let result=countOccurance(GivenString,CharToCount)
console.log(`the count of '${CharToCount}' in the '${GivenString}' is '${result}'`)