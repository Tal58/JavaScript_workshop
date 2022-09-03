// Input : JavaScript coding ChAlLenge
// Output : javaScriptCodingChallenge
// Input : JavaScript-coding-challenge
// Output : JavaScriptCodingChallenge


let Input1 = "JavaScript coding ChAlLenge"

let Input2 = "JavaScript-coding-challenge"

const camel = (str) =>{
        newStr = str.replaceAll(" ", "").replaceAll("-","")
        return newStr
}

console.log(camel(Input1))
console.log(camel(Input2))