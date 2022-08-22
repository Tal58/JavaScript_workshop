// Have the function LetterCount(str) take the str parameter being passed and return the first word with the
// greatest number of repeated letters.
// For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's.
//  If there are no words with repeating letters return -1.
// Words will be separated by spaces.

function LetterCount(str){
    let count2 = 0;
    let count1 = 0;
    let greatestWord = "";
    let newArr= str.split(" ");
    for (const x of newArr) {
        for (const y of x){   
            for (var i=0; i< x.length; i++){
                if (x[i]==y){
                    count1++
                }
            }
            if (count1>count2){
            count2 = count1;
            greatestWord = x;
            count1 = 0 }
            else{
                count1 = 0;
            }
        }

    }
    if (count2 >=2){
        return greatestWord
    }else {return -1}

}
console.log(LetterCount("Today, is the greatest day ever!"));



