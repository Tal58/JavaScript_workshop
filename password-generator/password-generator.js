let symbolList = "!@#$%^&*()\_+~|}{[]:;?><,./-="
let newSymbol = symbolList.split("") //to make a list of symbol list
let characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let newChar = characters.split("")

const passwordGenerator = () =>{
    let newStr = []
    for (let i=0; i<2; i++){   //to select random symbol
        newStr.push(newSymbol[Math.floor(Math.random()*newSymbol.length)])
    }    
    newStr.push(newChar[Math.floor(Math.random()*newChar.length)].toUpperCase()) //1 compulsory uppercase
    newStr.push(newChar[Math.floor(Math.random()*newChar.length)].toLowerCase()) //1 compulsory lowercase
    for (let i=0;i<3; i++){
        newStr.push(Math.floor(Math.random()*10))                               //3 random numbers and characters
        newStr.push(newChar[Math.floor(Math.random()*newChar.length)])
    }
    newStr = newStr.sort(() => Math.random() - 0.5) //finally mix all elements again
    newStr = newStr.join("")
    return newStr
}
console.log(passwordGenerator())
console.log(passwordGenerator().length)