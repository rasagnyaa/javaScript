// Create a function that moves all capital letters to the front of a word.
// 	Examples :
// capToFront("hApPy") ➞ "APhpy"
function capToFront(wordd){
    let capitals=[]
    let lowercase=[]
    for(char of word){
        if(char.toUpperCase()===char){
            capitals.push(char)
        }else{
            lowercase.push(char)
        }
    }
    return capitals.join("")+lowercase.join("")
}
let wordd="hApPy"
let res=capToFront(wordd)
console.log(`"${res}"`)
// capToFront("moveMENT") ➞ "MENTmove"
function capToFront(word){
    let caps=[]
    let low=[]
    for(char of word){
        if(char.toUpperCase()===char){
            caps.push(char)
    }else{
        low.push(char)
    }
   }
return caps.join("")+low.join("")
}
let word="moveMENT"
let ress=capToFront(word)
console.log(`"${ress}"`)
// capToFront("shOrtCAKE") ➞ "OCAKEshrt"
function capToFront2(wrd){
    let cap=[]
    let lw=[]
    for(ch of wrd){
        if(ch.toUpperCase()===ch){
            cap.push(ch)
    }else{
      lw.push(ch)
    }
}
return cap.join("")+lw.join("")
}
let wrd="shOrtCAKE"
let result=capToFront2(wrd)
console.log(`"${result}"`)