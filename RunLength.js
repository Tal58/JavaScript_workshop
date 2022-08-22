// Run Length
// Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. 
// This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. 
// For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.

function isStr(str) {
    let counter = 0;
    for (const x of str) {
        if (x == x.match(/[a-z]/i)) {
            counter++
        } else { return false }
    }
    if (counter = str.length) {
        return true
    } else {return false }}
function RunLength(str) {
    let newDict = {}
    let counter = 0;
    let str1 = "";
    for (const x of str) {
        counter = 0;
        for (let i = 0; i < str.length; i++) {
            if (x == str[i]) {
                counter++}}
        if (newDict.hasOwnProperty(x)) {continue}
        else {newDict[x] = counter;}}
    for (const [key, value] of Object.entries(newDict)) {
        str1 += value+key;
    }return str1}
while (true) {
    // let word = prompt("Please enter a word");
    let word = "wwwggopp"
    if (isStr(word)) {
        console.log(RunLength(word));
        break;} else {
        console.log("you made a mistake!!!")}}




