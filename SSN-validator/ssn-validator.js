const ssnValidator = (str) => {
    let newStr = "";
    let regex = /\d/g
    newStr = str.split("-")

    if ((newStr[0].match(regex).length === 3) && ((newStr[1].match(regex).length === 2)) && ((newStr[2].match(regex).length === 4))) {  ///to check whether the number has 9 digit, seperated by "-"
        if (parseInt(newStr[0]) < 900) {  //first part should smaller than 900
            let counter = 0;
            for (const x of newStr[0]) { ///to check dublicated numbers
                let s = ""
                if (x === s) {
                    counter++
                } else {
                    s = x}
                }
            if (counter === 3) {
                console.log("invalid SSN ")
                return false}
            else {
                console.log("valid SSN ")
                return true}
        }
        else {
            console.log("invalid SSN ")
            return false}
    } else {
        console.log("invalid SSN ")
        return false}
}
console.log(ssnValidator("268-26-3556"))
console.log(ssnValidator("237-86-7532"))
console.log(ssnValidator("304-92-5339"))
console.log(ssnValidator("510-72-0765"))
console.log(ssnValidator("504-58-0987"))




