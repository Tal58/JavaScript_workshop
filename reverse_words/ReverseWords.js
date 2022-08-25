let str1 = 'Clarusway'
let str2 = 'days. big make things Little'

const reverseWords = (str) => {
    newArr = [];
    newArr2 = [];
    if ((str.split(" ").length) ==1){
        return str
    }else{
     newArr  = str.split(" ")
     for (const x of newArr){
        newArr2.unshift(x)
     }
    }return newArr2.join(" ")
}

console.log(reverseWords(str2))