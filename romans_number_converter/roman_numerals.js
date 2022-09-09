const romans_list = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
}
const romans = (num) => {
    let romansNumber = []
    let newRoman = ""
    do {
        Object.keys(romans_list).map((x) => {
            let counter = 0;
            counter = Math.floor(num / romans_list[x])
            if (counter !== 0) {
                if (String(num)[0] == 9) {
                    romansNumber.push(Object.keys(romans_list)[Object.keys(romans_list).indexOf(x) + 1]) //enter an one smaller roman number 
                    romansNumber.push(Object.keys(romans_list)[Object.keys(romans_list).indexOf(x) - 1]) //enter an one bigger roman number 
                    num = romans_list[Object.keys(romans_list)[Object.keys(romans_list).indexOf(x) - 1]] - num // subtract bigger number from num
                    num = num - romans_list[Object.keys(romans_list)[Object.keys(romans_list).indexOf(x) + 1]] //subtract num from smaller roman number
                    if (num<0){
                        num = num*(-1)
                    }
                }
                else if (counter <= 3) {
                    for (let i = 0; i < counter; i++) {
                        romansNumber.push(x)
                    }
                    num -= counter * romans_list[x]
                }
                else if (counter < 5) { 
                    romansNumber.push(x)
                    romansNumber.push(Object.keys(romans_list)[Object.keys(romans_list).indexOf(x) - 1]) //enter an one bigger roman number 
                    num = romans_list[Object.keys(romans_list)[Object.keys(romans_list).indexOf(x) - 1]] - num // subtract bigger number from num  
                    num = romans_list[Object.keys(romans_list)[Object.keys(romans_list).indexOf(x)]] - num // subtract number from num  
                }
                else {
                        romansNumber.push(x)
                        num -= counter * romans_list[x]
                }            
            }
        })
    } while (num > 0)
    newRoman = romansNumber.join("")
    return console.log(newRoman)
}
romans(1000)
romans(900)
romans(90)
romans(2008)
romans(2000)
romans(8)
romans(998)
romans(148)
romans(579)
romans(999)
romans(3999)
romans(49)


