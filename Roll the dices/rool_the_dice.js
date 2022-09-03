// JS-CC-026 : Roll the Dices

input1 = 1+Math.floor(Math.random()*6)
input2 = 1+Math.floor(Math.random()*6)

console.log(input1)
console.log(input2)
let dice = {
    0 : "zero",
    1 : "one",
    2 : "two",
    3 : "three",
    4 : "four",
    5 : "five",
    6 : "six",
    7 : "seven",
    8 : "eight",
    9 : "nine"
}
input1 > input2 ? console.log(`${dice[input2]} - ${dice[input1]}`) : console.log(`${dice[input1]} - ${dice[input2]}`)