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
