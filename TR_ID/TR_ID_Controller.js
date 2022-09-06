const idController = (num) => {
    let newStr = String(num);
    let regex1 = /[0-9]/g
    if (newStr.match(regex1).length == 11) {  /// to check all 11 number
        if (newStr[0] != 0) {
            let sumOdd = 0;
            for (i = 0; i <= 8; i += 2) {
                sumOdd += parseInt(newStr[i])
            }
            let sumEven = 0;
            for (i = 1; i < 8; i += 2) {
                sumEven += parseInt(newStr[i])
            }
            if ((sumOdd * 7 - sumEven) % 10 == newStr[9]) {
                let sum = 0;
                for (let i = 0; i < (newStr.length - 1); i++) {
                    sum += parseInt(newStr[i]);
                }
                if (sum % 10 == newStr[10]) {
                    console.log("valid TR-ID number")
                    return true
                }

            } else {
                console.log("invalid TR-ID number")
                return false
            }
        } else {
            console.log("invalid TR-ID number")
            return false
        }

    } else {
        console.log("invalid TR-ID number")
        return false
    }
}
console.log(idController(12345678910))
console.log(idController(34444186512))
console.log(idController(34444185812))
console.log(idController(34444185856))
console.log(idController(10880383988))
console.log(idController(14702551364))
console.log(idController(90091059698))
console.log(idController(32413045316))
console.log(idController(12835718432))
console.log(idController(53963153566))
console.log(idController(11111111110))







