const generateNum = (num1,num2) => {
    let newArr= [];
    if (num1<num2){
        for (let i = num1; i<=num2; i++){
            if (String(i).includes(5)){
                continue
            }else{
                newArr.push(i)
            }
        }console.log(newArr)
        console.log(`Result is : ${newArr.length}`)
    }else{
        console.log("Invalid number you entered!!!")
        return false
    }
}

generateNum(1,9)
generateNum(4,17)
