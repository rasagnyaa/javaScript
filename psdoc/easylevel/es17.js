// Create a function that takes a string and returns the number (count) of vowels contained within it.
// Example:

// countVowels("Celebration") ➞ 5

function vowelsCount(str1){
   let str=str1.toLowerCase()
   let vowles=["a","e","i","o","u",]
   c=0
    for(s of str){
        if(vowles.includes(s))
            c++
    }
return c
}
str1="Celebrations"
let res=vowelsCount(str1)
console.log(res)
