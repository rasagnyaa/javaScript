function CapString(sentence){
  let words = sentence.split(" ")
  let CapDone=[]
  for(let i=0;i<words.length;i++){
    let word = words[i]
    let CapitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
    CapDone.push(CapitalizedWord)
  }
  let CapString = CapDone.join(" ")
  return CapString
}
let originalSentence="hi good morning"
let cap=CapString(originalSentence)
console.log(cap)