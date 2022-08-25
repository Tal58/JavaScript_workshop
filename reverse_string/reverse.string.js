let sentence = "Clarusway Rocks!"

const reverse = (str) => {
    let newArr = [];
    for (const x of str){
        newArr.unshift(x)
    }return newArr.join("")
}
console.log(reverse(sentence))