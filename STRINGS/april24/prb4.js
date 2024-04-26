debugger;
function reversed(sentence){
    let GivenString=sentence.split(" ")
    let reverseGivenString=GivenString.reverse()
    let reverseSentence=reverseGivenString.join(" ")
    return reverseSentence
}
let sentence="thankyou universe for the beautiful life"
let reverseSentence=reversed(sentence)
console.log(reverseSentence)