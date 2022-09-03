// Input : JavaScript coding ChAlLenge
// Output : javaScriptCodingChallenge
// Input : JavaScript-coding-challenge
// Output : JavaScriptCodingChallenge

let Input1 = "JavaScript coding ChAlLenge"
let Input2 = "JavaScript-coding-challenge"
const camel = (str) =>{
        if (str.match("-")){
                 newStr = str.split("-")
        }else {
                 newStr = str.split(" ")
        }
        let newArr = [];
        let string = ""
      for (const x of newStr) {
        string = x.toLowerCase()
        newArr.push(string.charAt(0).toUpperCase()+string.slice(1))}        
        return newArr.join("")
}
console.log(camel(Input1))
console.log(camel(Input2))