function CountOfVowels(str){
    str=str.toLowerCase()
    let vowels=['a','e','i','o','u']
    let count = 0
    for(char of str){
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}
let str="hello"
let res=CountOfVowels(str)
console.log(res)